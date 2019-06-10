<?php

namespace Statamic\Addons\Aardwolf;

use Statamic\API\Nav;
use Statamic\Extend\Listener;

class AardwolfListener extends Listener
{
    /**
     * The events to be listened for, and the methods to call.
     *
     * @var array
     */
    public $events = [
        'cp.nav.created' => 'addNavItems',
        'cp.add_to_head' => 'addHeadResources'
    ];

    public function addNavItems($nav)
    {
        $menu = Nav::item('Menu')->route('aardwolf.index')->icon('menu');
        $menu->add(function ($item) {
            $item->add(Nav::item('Settings')->route('addon.settings', [ 'addon' => 'aardwolf' ]));
        });

        return $nav->addTo('tools', $menu);
    }

    /**
     * The required resources to be added to CP's <head>
     *
     * @return string
     */
    public function addHeadResources()
    {
        $html = [
            $this->css->tag('styles'),
            '<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.8.4/Sortable.min.js"></script>',
            // '<script src="//cdn.jsdelivr.net/npm/sortablejs@1.8.4/Sortable.min.js"></script>',
            // '<script src="//cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/2.20.0/vuedraggable.umd.min.js"></script>',
            // '<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.0.0/lodash.min.js"></script>',
            // '<script src="https://cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/1.0.9/vuedragablefor.min.js"></script>'
        ];

        return join('', $html);
    }
}
