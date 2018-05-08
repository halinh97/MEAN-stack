app.controller('nutrition-for-olderCtrl', function($scope, $http, apiService) {
  window.apps = this;
  let self = this;
  
  apiService.getNutritionForOlder()
    .then(function(product) {
      $scope.data = product.data;
      console.log('product', product);
    })
});
