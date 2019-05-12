<div class="card flush">
  <div class="dossier-table-wrapper">
    <table class="dossier">
      <tbody>
        @foreach($menus as $menu)
          <tr>
            <td class="cell-title first-cell">
              <span class="column-label">Title</span>
              <a class="has-status-icon" href="{{ route('aardwolf.edit', [ 'slug' => $menu['label'] ]) }}">
                <span data-tooltipped="" aria-describedby="tippy-tooltip-2" data-original-title="Published" class="status status-live" tip-text="Published"></span>

                {{ $menu['title'] }}
              </a>
            </td>
            <td class="column-actions">
              <div class="btn-group action-more">
                <button type="button" class="btn-more dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="icon icon-dots-three-vertical"></i> </button>
                <ul class="dropdown-menu">
                  <li><a href="{{ route('aardwolf.edit', [ 'slug' => $menu['label'] ]) }}">Edit</a></li>
                  <li class="warning">
                    <a href="{{ route('aardwolf.delete', [ 'slug' => $menu['label'] ]) }}">Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
  </div>
</div>