<?php

namespace Statamic\Addons\Aardwolf;

use Statamic\API\File;
use Statamic\API\YAML;
use Statamic\Extend\Tags;

class AardwolfTags extends Tags
{
    const storage_path = 'site/storage/addons/Aardwolf/';

    /**
     * The {{ aardwolf }} tag
     *
     * @return string|array
     */
    public function index()
    {
        $slug = $this->getParam('slug');
        $path = self::storage_path . $slug;

        if (!File::exists($path)) {
            return "<!-- Statamic\Addons\Aardwolf :: Could not load Menu with slug $slug";
        }

        $menu = YAML::parse(File::get($path));

        return $this->parseLoop($menu['items']);
    }

    /**
     * The {{ aardwolf:example }} tag
     *
     * @return string|array
     */
    public function example()
    {
        //
    }
}
