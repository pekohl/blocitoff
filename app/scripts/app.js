

(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
         .state('all', {
                 url: '/all',
                 controller: 'AllCtrl as all',
                 templateUrl: '/templates/all.html'
             })
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
