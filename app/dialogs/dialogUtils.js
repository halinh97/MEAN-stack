app.service('DialogService', DialogUtils);

function DialogUtils(ModalService, $timeout, apiService) {
  let myDialogs = new Object();
  myDialogs.newCart = function() {
    function ModalController(close) {
      window.new = this;
      var self = this;
      this.data = apiService.listProducts;
      self.data.forEach(function(data) {
        data.sum = 10;
      })

      this.delProduct = function(id) {
        for (i in self.data) {
          if (self.data[i]._id == id) {
            self.data.splice(i, 1);
            self.init();
          }
        }
      }
      this.myChange = function(da) {
        da.sum = da.amount * da.calo;
        self.init();
      }
      this.init = function() {
        self.sumCalo = sumCalo(self.data);
      }
      this.init();

      function sumCalo(arr) {
        var sums = 0;
        for (var i = 0; i < arr.length; i++) {
          sums += arr[i].sum;
        }
        return sums;
      }
    }

    ModalService.showModal({
      templateUrl: 'app/dialogs/modal-cart/cartView.html',
      controller: ModalController,
      controllerAs: 'Modal'
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(data) {
        $('.modal-backdrop').last().remove();
        $('body').removeClass('modal-open');
      });
    });
  }

  return myDialogs;
}
