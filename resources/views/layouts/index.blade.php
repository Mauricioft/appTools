<!DOCTYPE html>
<html lang="en" ng-app="app">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Tools</title>

        <!-- Bootstrap -->
        <link rel="icon" href="../assets/images/favicon.ico">
        <link href="libs/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--
        [if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]
        -->
    </head>
    <body>
        <div class="container">
            <div ui-view></div>    
        </div> <!-- /container -->
        
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="libs/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="libs/node_modules/angular/angular.min.js"></script> 
        <script src="libs/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"></script> 
        <script src="libs/node_modules/angular-ui-router/release/angular-ui-router.min.js"></script> 
        <script src="libs/node_modules/angular-smart-table/dist/smart-table.min.js"></script> 
        <script src="app/front/app.js"></script> 
        <script src="app/front/controllers/MainController.js"></script> 
    </body>
</html>  