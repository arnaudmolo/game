<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <form action="post" id="search">
            <input type="text" id="suggest" autofocus placeholder="Cherchez moi !" autocomplete="off" />
        </form>
        <a href="#/add" id="add"></a>
        <section id="studient-list" class="container">
            
        </section>

        <div id="popup" data-toggle="hidden">
            <a href="#/" class="close">close</a>
            <form action="post">
                <p>
                    <label for="lastname">lastname</label><input type="text" placeholder="lastname" name="lastname">
                </p>
                <p>
                    <label for="firstname">firstname</label><input type="text" placeholder="firstname" name="firstname">
                </p>
                <p>
                    <label for="promotion">promotion</label><input type="text" placeholder="promotion" name="promotion">
                </p>
                <p>
                    <label for="image">image</label><input type="text" placeholder="image" name="image">
                </p>
                <input type="submit">
            </form>
        </div>

        <script type="text/template" id="studient-template">
            <a href="<%= website %>" target="_blank" title="website"><img src="<%= image %>" alt="<%= firstname %>" height="200"></a>
            <span class="toEdit">
                <h2><%= firstname %></h2>
                <input class="hide" type="text" name="firstname" value="" placeholder="<%= firstname %>">
            </span>
            <span class="toEdit">
                <h3><%= lastname %></h3>
                <input class="hide" type="text" name="lastname" value="" placeholder="<%= lastname %>">
            </span>
            <span class="toEdit">
                <p><%= promotion %></p>
                <input class="hide" type="text" name="promotion" value="" placeholder="<%= promotion %>">
            </span>
            <ul>
                <% if (capacities){
                    _.each(capacities, function(el){ %>
                        <li><%= el %></li>
                    <% })
                } %>
            </ul>
        </script>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/vendor/lodash.js"></script>
        <script src="js/vendor/backbone.js"></script>

        <script src="js/view/studientView.js"></script>
        <script src="js/model/studient.js"></script>
        <script src="js/collection/promotions.js"></script>
        <script src="js/app.js"></script>

        <script src="js/router.js"></script>

        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
