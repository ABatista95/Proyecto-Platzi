<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="csrf-token" value="{{ csrf_token() }}"/>

    <title>Curso Platzi</title>

    {{-- CDNs de Font-Awesome --}}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"/>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}" type="text/css"/>
</head>
<body>
    <div id="app"></div>

    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
