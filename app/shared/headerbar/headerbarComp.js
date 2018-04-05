function Controller($http, $scope,shareData){
    let self = this;
    self.showModal = function(){
      $scope.listadd = shareData.getData();
   }

}

app.component('headerBar', {
    templateUrl: 'app/shared/headerbar/headerbarView.html',
    controller: Controller,
    controllerAs: 'headerbarCtrl'
})
