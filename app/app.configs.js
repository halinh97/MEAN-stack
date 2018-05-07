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
                    controller: 'nutritionCtrl'
                }
            }

        })
        .state('home.nutrition-for-elder', {
            url: "/nutrition-for-elder",
            views: {
                "": {
                    templateUrl: 'app/components/nutrition-for-elder/nutrition-for-elderView.html',
                    controller: 'nutrition-for-elderCtrl'
                }
            }

        })
        .state('home.nutrition-for-older', {
            url: "/nutrition-for-older",
            views: {
                "": {
                    templateUrl: 'app/components/nutrition-for-older/nutrition-for-olderView.html',
                    controller: 'nutrition-for-olderCtrl'
                }
            }

        })
        .state('home.weight-gain', {
            url: "/weight-gain",
            views: {
                "": {
                    templateUrl: 'app/components/weight-gain/weight-gainView.html',
                    controller: 'weight-gainCtrl'
                }
            }

        })
        .state('home.weight-loss', {
            url: "/weight-loss",
            views: {
                "": {
                    templateUrl: 'app/components/weight-loss/weight-lossView.html',
                    controller: 'weight-lossCtrl'
                }
            }

        })
        .state('home.do-you-know', {
            url: "/do-you-know",
            views: {
                "": {
                    templateUrl: 'app/components/do-you-know/do-you-knowView.html',
                    controller: 'do-you-knowCtrl'
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
        .state('home.login', {
            url: "/login",
            views: {
                "": {
                    templateUrl: 'app/components/authentication/login.html',
                    controller: 'loginCtrl'
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
