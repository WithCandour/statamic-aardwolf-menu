@extends('layout')

@section('content')
  <div class="flex items-center flex-wrap mb-3">
    <h1 class="w-full text-center mb-2 md:mb-0 md:text-left md:w-auto md:flex-1">
      {{ translate('addons.Aardwolf::titles.index') }}
    </h1>

    @include('Aardwolf::partials.nav')
  </div>

    @if(count($menus) === 0)
      <div class="card">
        <h3>You haven't created any menu's yet</h3>
      </div>
    @else
      @include('Aardwolf::partials.menu-table')
    @endif
  </div>
@endsection
