app.service('apiService', ApiService);
function ApiService ($http, $window) {
    var defaultImage = "../../assests/images/2.png";
    var getProduct = function() {
        return $http.get('/api/products', {
        });
    }
    var getPostDoYouKnow = function() {
        return $http.get('/api/do-you-know', {
        });
    }
    var getNutrition = function() {
        return $http.get('/api/nutrition', {
        });
    }
    var getNutritionForElder = function() {
        return $http.get('/api/nutrition-for-elder', {
        });
    }
    var getNutritionForOlder = function() {
        return $http.get('/api/nutrition-for-older', {
        });
    }
    var getWeightGain = function() {
        return $http.get('/api/weight-gain', {
        });
    }
    var getWeightLoss = function() {
        return $http.get('/api/weight-loss', {
        });
    }
    var getuser =  function(){
        return  $http.post('/api/user/login', {
        });
    }
 var listProducts = [];
 var product = {};

    return {
        getuser:getuser,
        listProducts: listProducts,
        product: product,
        defaultImage: defaultImage,
        getProduct:getProduct,
        getPostDoYouKnow:getPostDoYouKnow
    }
}
