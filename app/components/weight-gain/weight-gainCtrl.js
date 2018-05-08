app.controller('weight-gainCtrl', function($scope, $http, apiService) {
  window.apps = this;
  let self = this;
  
  apiService.getWeightGain()
    .then(function(product) {
      $scope.data = product.data;
      console.log('product', product);
    })
});
