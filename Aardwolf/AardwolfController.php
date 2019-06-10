<?php

namespace Statamic\Addons\Aardwolf;

use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Support\Facades\Storage;
use Statamic\API\Fieldset;
use Statamic\API\File;
use Statamic\API\YAML;
use Statamic\CP\Publish\ProcessesFields;
use Statamic\Extend\Controller;

class AardwolfController extends Controller
{
    use ProcessesFields;

    const storage_path = 'site/storage/addons/Aardwolf/';

    private function getStoragePath($label = null)
    {
        return is_null($label)
            ? self::storage_path
            : self::storage_path . $label . '.yaml';
    }

    private function menuFieldset()
    {
        return Fieldset::create(
            'create',
            YAML::parse(File::get($this->getDirectory().'/resources/fieldsets/create.yaml'))
        );
    }

    private function itemFieldset()
    {
        $slug = $this->getConfig('fieldset', null);
        $fieldset = null;

        if ($slug !== null) {
            $fieldset = Fieldset::get($slug);
        }

        return $fieldset;
    }

    private function getMenuList()
    {
        $files = Storage::files($this->getStoragePath());

        return collect($files)->map(function($path) {
            return YAML::parse(File::get($path));
        });
    }

    /**
     * Maps to the "aardwolf.index" / route
     *
     * @return View
     */
    public function index() : View
    {
        $menus = $this->getMenuList();

        return $this->view('index', [
            'title' => trans('addons.Aardwolf::titles.index'),
            'menus' => $menus
        ]);
    }

    /**
     * Maps to the "aardwolf.create" /create route
     *
     * @return View
     */
    public function create() : View
    {
        $fieldset = $this->menuFieldset();

        return $this->view('create', [
            'title' => trans('addons.Aardwolf::titles.create'),
            'data' => [],
            'fieldset' => $fieldset->toPublishArray(),
            'suggestions' => [],
            'submitUrl' => route('aardwolf.postCreate')
        ]);
    }

    /**
     * Maps to the "aardwolf.postCreate" /create route
     *
     * Accepts a POST of "Menu" data, creates the default menu template, saves it,
     * and redirects the user to /edit/{slug}
     *
     * @return View
     */
    public function postCreate(Request $request)
    {
        $data = $this->processFields($this->menuFieldset(), $request->fields);

        // Generate a slug if there isn't one defined
        if (empty($data['label'])) {
            $data['label'] = str_slug($data['title']);
        }

        // Adds the default items array to the $data
        $data['items'] = [];

        // Generate the potential path for this menu
        $path = $this->getStoragePath($data['label']);

        // Check whether it already exists (duplicate)
        if (File::exists($path)) {
            return [
                'success' => false,
                'message' => trans('addons.Aardwolf::messages.duplicate')
            ];
        }

        // Save it
        File::put($path, YAML::dump($data));

        // Return success message and redirect instruction to publish-fields
        return [
            'success' => true,
            'message' => trans('cp.saved_success'),
            'redirect' => route('aardwolf.edit', [ 'label' => $data['label'] ])
        ];
    }

    /**
     * Maps to the "aardwolf.edit" /edit/{label} route
     *
     * @param string $label The label of the menu to edit
     *
     * @return mixed
     */
    public function edit(string $label)
    {
        $path = $this->getStoragePath($label);
        $fieldset = $this->itemFieldset();

        if (!File::exists($path)) {
            $this->flash->put('error', trans('addons.Aardwolf::messages.menu_not_found'));
            return redirect()->route('aardwolf.index');
        }

        if (!$fieldset) {
            $this->flash->put('error', trans('addons.Aardwolf::messages.fieldset_not_found'));
            return redirect()->route('addon.settings', [ 'addon' => 'aardwolf' ]);
        }

        $menu = YAML::parse(File::get($path));

        return $this->view('edit', [
            'title' => trans('addons.Aardwolf::titles.edit', [ 'title' => $menu['title'] ]),
            'fieldset' => $fieldset->toPublishArray(),
            'menu' => $menu
        ]);
    }

     /**
     * Maps to the "aardwolf.update" /update/{label} route
     *
     * @param string $label The label of the menu to edit
     *
     * @return mixed
     */
    public function update(string $label, Request $request)
    {
        $path = $this->getStoragePath($label);

        // Save it
        File::put($path, YAML::dump($request->menu));

        return [
            'success' => true,
            'message' => trans('cp.saved_success'),
            'redirect' => route('aardwolf.index')
        ];
    }

    /**
     * Maps to the "aardwolf.delete" /delete/{label} route
     *
     * @param string $label The label of the menu to edit
     *
     * @return mixed
     */
    public function delete(string $label)
    {
        $path = $this->getStoragePath($label);

        // Delete it
        File::delete($path);

        return redirect(route('aardwolf.index'));
    }
}
