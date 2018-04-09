function Controller($scope) {
  let self = this;
  angular.element(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        $('body').removeClass('loading');
      }
    });
  });
  $scope.title ="Healthy every day";
  $scope.menu = [{
      "name": "Healthy every day",
      "id": "1"
    },{
      "name": "Nutrition",
      "id": 2
    }, {
      "name": "Nutrition for the elderly",
      "id": 3
    }, {
      "name": "Nutrition for dieters",
      "id": 4
    }, {
      "name": "You probably do not know",
      "id": 5
    }, {
      "name": "Add product",
      "id": 6
    }]
  $scope.clickB=function (i) {
    $scope.title = i;
    console.log($scope.title);
  }
}

  app.component('sideBar', {
    templateUrl: "app/shared/sidebar/sidebarView.html",
    controller: Controller,
    controllerAs: 'sidebarCtrl'
  })
