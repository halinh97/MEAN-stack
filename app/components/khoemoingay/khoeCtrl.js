app.controller('khoeCtrl', function($scope,$http) {
  angular.element(document).ready(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
    $scope.linh = "linh";
    console.log($scope.linh);
    $http.get('app/components/data.json')
        .then(function(res) {
           console.log(res.data,13131231231231);

        });
});
