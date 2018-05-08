app.controller('nutrition-for-elderCtrl', function($scope, $http, apiService) {
  window.apps = this;
  let self = this;
  
  apiService.getNutritionForElder()
    .then(function(product) {
      $scope.data = product.data;
      console.log('product', product);
    })
});
