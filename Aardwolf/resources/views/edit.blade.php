@extends('layout')

@section('content')
  <aardwolfeditor />

  <script>
    Statamic.Publish = {
      suggestions: {
        '{"type":"collection","show_when":{"type":"entry"}}': [
          {
            'text': 'Sausage',
            'value': 'sausage'
          }
        ]
      }
    }
    Statamic.AardwolfMenuFieldset = JSON.parse(atob('{!! base64_encode(json_encode($fieldset)) !!}'));
    Statamic.AardwolfMenu = JSON.parse(atob('{!! base64_encode(json_encode($menu)) !!}'));
  </script>
@endsection
