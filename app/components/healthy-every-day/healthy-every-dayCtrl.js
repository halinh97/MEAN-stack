app.controller('HealthyEveryDayCtrl', function($scope, $http, apiService) {
  window.apps = this;
  let self = this;
  this.list = [{
    "_id": "5ac3cfd929e76f33b44e7748",
    "name": "Product demo",
    "offer": "/assests/images/offer.png",
    "img": "/assests/images/60.png",
    "tag": "/assests/images/tag.png",
    "calo": 10.0,
    "amount":1,
    "create_date": "2018-04-03T19:02:49.843Z",
    "__v": 0
  }];
  angular.element(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        $('body').removeClass('loading');
      }
    });
  });
  apiService.getProduct()
    .then(function(product) {
      $scope.data = product.data;
      console.log('product', product.data);
      $scope.addShop = function(id) {
        let pro = $scope.data.find(p => {
          return p._id == id;
        })
        self.list.push(pro);
        $.notify({
          icon: 'fa fa-check',
          message: 'Add ' + pro.name + ' to the menu'
        });
        console.log(self.list);
        for (var i = 1; i < self.list.length; i++) {
          for (var y = 0; y < i; y++) {
            if (self.list[i] == self.list[y]) {
              for (var k = i; k < self.list.length; k++) {
                self.list[k] = self.list[k + 1]
                self.list.length = self.list.length - 1;
                i = i - 1;
              }
            }
          }
        }
        apiService.listProducts = self.list;
      }

    })

});
