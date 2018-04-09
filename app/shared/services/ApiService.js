app.service('apiService', ApiService);
function ApiService ($http, $window) {
    var defaultImage = "../../assests/images/2.png";
    var getProduct = function() {
        return $http.get('/api/products', {
        });
    }
 var listProducts = [];
 var product = {};

    return {
        listProducts: listProducts,
        product: product,
        defaultImage: defaultImage,
        getProduct:getProduct
    }
}
