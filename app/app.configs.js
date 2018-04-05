app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider

        .state('home', {
            url: '',
            views: {
                "": {
                    templateUrl: 'app/homeView.html'
                },
            }
        })
        .state('home.healthy-every-day', {
            url: "/",
            views: {
                "": {
                    templateUrl: 'app/components/healthy-every-day/healthy-every-dayView.html',
                    controller: 'HealthyEveryDayCtrl'
                }
            }

        })
        .state('home.nutrition', {
            url: "/nutrition",
            views: {
                "": {
                    templateUrl: 'app/components/nutrition/nutritionView.html',
                    controller: 'NutritionCtrl'
                }
            }

        })
        .state('home.add-product', {
            url: "/add-product",
            views: {
                "": {
                    templateUrl: 'app/components/nutrition/add-productView.html',
                    controller: 'NutritionCtrl'
                }
            }
        })
        .state('home.strong', {
            url: "/bb",
            redirectTo: 'home.healthy-every-day'
        })

        .state('error', {
            url: "/error",
            templateUrl: 'assests/html/error.html'
        })


    // use the HTML5 History API
    $locationProvider.html5Mode(true).hashPrefix('');
})
