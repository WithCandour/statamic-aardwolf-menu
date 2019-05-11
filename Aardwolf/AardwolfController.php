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

    private function fieldset()
    {
        return Fieldset::create(
            'create',
            YAML::parse(File::get($this->getDirectory().'/resources/fieldsets/create.yaml'))
        );
    }

    /**
     * Maps to the "aardwolf.index" / route
     *
     * @return View
     */
    public function index() : View
    {
        $menus = collect(Storage::files(self::storage_path))->map(function($path) {
            return YAML::parse(File::get($path));
        });

        return $this->view('index', [ 'menus' => $menus ]);
    }

    /**
     * Maps to the "aardwolf.create" /create route
     *
     * @return View
     */
    public function create() : View
    {
        $fieldset = $this->fieldset();

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
        $data = $this->processFields($this->fieldset(), $request->fields);

        // Generate a slug if there isn't one defined
        if (empty($data['slug'])) {
            $data['slug'] = str_slug($data['title']);
        }

        // Adds the default items array to the $data
        $data['items'] = [];

        // Generate the potential path for this menu
        $path = self::storage_path . $data['slug'];

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
            'redirect' => route('aardwolf.index')
        ];
    }

    /**
     * Maps to the "aardwolf.edit" /edit/{slug} route
     *
     * @param string $slug The slug of the menu to edit
     *
     * @return mixed
     */
    public function edit(string $slug)
    {
        $path = self::storage_path . $slug;

        if (!File::exists($path)) {
            $this->flash->put('error', trans('addons.Aardwolf::messages.not_found'));
            return redirect()->route('aardwolf.index');
        }

        return $this->view('edit', [
            'menu' => YAML::parse(File::get($path))
        ]);
    }

     /**
     * Maps to the "aardwolf.update" /update/{slug} route
     *
     * @param string $slug The slug of the menu to edit
     *
     * @return mixed
     */
    public function update(string $slug, Request $request)
    {
        $path = self::storage_path . $slug;

        // Save it
        File::put($path, YAML::dump($request->menu));

        return [
            'success' => true,
            'message' => trans('cp.saved_success'),
            'redirect' => route('aardwolf.index')
        ];
    }

    /**
     * Maps to the "aardwolf.delete" /delete/{slug} route
     *
     * @param string $slug The slug of the menu to edit
     *
     * @return mixed
     */
    public function delete(string $slug)
    {
        return $this->view('delete');
    }
}
