(function () {
    'use strict';
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
                templateUrl: '/templates/active.html'
            })
            .state('inactive', {
                url: '/inactive',
                controller: 'InactiveCtrl as inactive',
                templateUrl: '/templates/inactive.html'
            });
    }
    angular
        .module('BlocItOff', ['ui.router', 'firebase', 'ngMaterial'])
        .config(config);
})();
