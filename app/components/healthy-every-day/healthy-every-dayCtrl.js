app.controller('HealthyEveryDayCtrl', function($scope, $http,shareData) {
  window.apps = this;
  let self = this;
  angular.element(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        $('body').removeClass('loading');
      }
    });
  });
  $scope.listProducts = [];
    $http.get('/api/products').then(function(response){
      $scope.data = response.data;
      console.log($scope.data);
      $scope.addShop = function(id) {
        $scope.data.forEach(function(data) {
          if (data._id == id) {
             $scope.listProducts.push(data);
            $.notify({
              icon: 'fa fa-check',
              message: 'Đã thêm ' + data.name + ' vào thực đơn'
            });
          }

        })
      }
      shareData.setData($scope.listProducts);
    });


});
