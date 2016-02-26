(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
         .state('active', {
                 url: '/active',
                 controller: 'ActiveCtrl as active',
                 templateUrl: '/templates/all.html'
             })
         .state('inactive', {
                 url: '/inactive',
                 controller: 'InactiveCtrl as inactive',
                 templateUrl: '/templates/main.html'
         });
     }
    angular
        .module('BlocItOff', ['ui.router', 'firebase'])
        .config(config);
 })();
