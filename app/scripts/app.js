var app = angular.module("BlocItOff", ["firebase"]);

(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
         .state('main', {
                 url: '/main',
                 controller: 'MainCtrl as main',
                 templateUrl: '/templates/main.html'
         });
     }
    angular
        .module('BlocItOff', ['ui.router'], ["firebase"])
        .config(config);
 })();
