app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //
    // For any unmatched url, redirect to error
    $urlRouterProvider.otherwise("error");
    //
    // Now set up the states
    $stateProvider

        .state('home', {
            url: '',
            //  authenticate: true,
            // abstract: true,
            views: {
                "": {
                    // controller: 'ContractSectionController',
                    templateUrl: 'app/homeView.html'
                },
            }
        })
        .state('home.khoemoingay', {
            url: "/",
            //  authenticate: true,
            views: {
                "": {
                    templateUrl: 'app/components/khoemoingay/khoeView.html',
                    controller: 'khoeCtrl'
                }
            }

        })
        .state('home.strong', {
            url: "/bb",
            redirectTo: 'home.khoimoingay'
        })

        .state('error', {
            url: "/error",
            templateUrl: 'assests/html/error.html'
        })


    // use the HTML5 History API
    $locationProvider.html5Mode(true).hashPrefix('');
})
