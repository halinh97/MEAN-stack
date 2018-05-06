app.service('apiService', ApiService);
function ApiService ($http, $window) {
    var defaultImage = "../../assests/images/2.png";
    var getProduct = function() {
        return $http.get('/api/products', {
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
        getProduct:getProduct
    }
}
