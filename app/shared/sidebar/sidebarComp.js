function Controller() {
  let self = this;
  angular.element(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        $('body').removeClass('loading');
      }
    });
  });
};

app.component('sideBar', {
  templateUrl: "app/shared/sidebar/sidebarView.html",
  controller: Controller,
  controllerAs: 'sidebarCtrl'
})
