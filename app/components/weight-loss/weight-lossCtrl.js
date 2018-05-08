app.controller('weight-lossCtrl', function($scope, $http, apiService) {
  window.apps = this;
  let self = this;
  
  apiService.getWeightLoss()
    .then(function(product) {
      $scope.data = product.data;
      console.log('product', product);
    })
});
