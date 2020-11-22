<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>krthush</title>

        <link rel="icon" href="./images/tab_icon.jpg">

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito';
                color: #fff;
                background-color: #1a202c;
                margin: 0;
                min-height: 100vh;
            }
            html {
              overflow-y: scroll;
            }
        </style>

    </head>
    <body>

        <div id="app">

            <app-header></app-header>

            <div class="container">

                <div class="row">
                    <div class="col">
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                    </div>
                </div>

                <div class="row">

                    <the-welcome-text></the-welcome-text>
                    
                </div>

                <div class="row">

                    <the-welcome-content></the-welcome-content>
                    
                </div>
                
            </div>

        </div>


        <script src="{{ mix('js/app.js') }}"></script>

    </body>
</html>
