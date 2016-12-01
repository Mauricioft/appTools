'use strict';

var app = angular.module('app', [
	'ui.router',
	'MainControllers',
    'smart-table'
]);

app.config(function($stateProvider, $urlRouterProvider, $interpolateProvider, $httpProvider) {
	// Angular Tags
    $interpolateProvider.startSymbol('{{');
    $interpolateProvider.endSymbol('}}');
    //
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	//  
	// For any unmatched url, redirect to /state1 
	$urlRouterProvider.otherwise("/app/pagination");
  	// 
  	// Now set up the states 
  	$stateProvider
  		// Main Layout Structure
        .state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'app/front/tpls/layout/app-body.html '
        })

	    .state('app.pagination', {
	      	url: "/pagination",
	      	templateUrl: "app/front/tpls/pagination/index.html",
	      	controller: 'MainCtrl'
	    });
});

//	filtro para poner la primera letra en mayúscula
app.filter("capitalize", function(){
    return function(text) {
        if(text != null){
            return text.substring(0,1).toUpperCase()+text.substring(1);
        }
    }
});

//	filtro para poner todo el texto en mayúsculas
app.filter("toUpper", function(){
    return function(text){
        if(text != null){
            return text.toUpperCase();
        }
    }
});

//	filtro para poner puntos suspensivos a partir de x carácteres
app.filter("maxLength", function(){
    return function(text,max){
        if(text != null){
            if(text.length > max){
                return text.substring(0,max) + "...";
            }
        }
    }
});

app.constant('CONSTANTS', {
    'APP_VERSION': '0.0.1',
    'BASE_URL': 'http://dev.tools.com',
    'API_BASE_URL': 'http://dev.tools.com/api/v1',
    'PATTERNS': {
        'IDENTIFIER': /^[0-9]{12}$/,
        'EMAIL': /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i,
        'USERNAME': /^[a-zA-Z0-9]{5,20}$/,
        'ALPHANUMERIC': /^[a-zA-ZñÑ\s\W0-9]+$/,
        'NUMERIC': /[0-9]+(\.[0-9][0-9]?)?/,
        'CHARACTER': /[a-zA-Z]/
    }
});