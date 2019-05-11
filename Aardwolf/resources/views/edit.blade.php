@extends('layout')

@section('content')
  <aardwolfeditor />

  <script>
    Statamic.AardwolfMenu = JSON.parse(atob('{!! base64_encode(json_encode($menu)) !!}'));
  </script>
@endsection
