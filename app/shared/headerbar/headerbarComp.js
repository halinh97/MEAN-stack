function Controller($http, $scope,DialogService){
    let self = this;
    self.showModal = function(){
      console.log('show modal');
      DialogService.newCart();

   }

}

app.component('headerBar', {
    templateUrl: 'app/shared/headerbar/headerbarView.html',
    controller: Controller,
    controllerAs: 'headerbarCtrl'
})
