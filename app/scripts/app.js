(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
$stateProvider
            .state('landing', {
                url: '/',
               controller: 'landingCtrl as landing',
                templateUrl: '/templates/landing.html'
        })
            
             .state('modal', {
                url: '/',
               controller: 'modalCtrl as modal',
                templateUrl: '/templates/modal.html'
        })
        
    }
    
   angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();