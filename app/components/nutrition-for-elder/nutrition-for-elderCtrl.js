app.controller('nutrition-for-elderCtrl', function($scope, $http, apiService) {
	window.apps = this;
	let self = this;
	
	apiService.getNutritionForElder()
	  .then(function(product) {
		console.log('product', product);
	   
	  })
  
  });
  