app.controller('weight-gainCtrl', function($scope, $http, apiService) {
	window.apps = this;
	let self = this;
	
	apiService.getWeightGain()
	  .then(function(product) {
		console.log('product', product);
	   
	  })
  
  });
  