app.controller('NutritionCtrl', function($scope, $http, $location){
	console.log('chedoCtrl loaded...');

	$scope.getProducts = function(){
		$http.get('/api/products').then(function(response){
			$scope.products = response.data;
		});
	}

	// $scope.getProduct = function(){
	// 	var id = $routeParams.id;
	// 	$http.get('/api/products/'+id).success(function(response){
	// 		$scope.book = response;
	// 	});
	// }
  $scope.linh="ha van linhha";
$scope.add = function () {
  console.log(1323123124242);
    window.location.href='/';

}
	$scope.addProduct= function(){
		console.log($scope.product);
		$http.post('/api/products/', $scope.product).then(function(response){
      // window.location='/';
		});
	}

	// $scope.updateProduct = function(){
	// 	var id = $routeParams.id;
	// 	$http.put('/api/products/'+id, $scope.product).success(function(response){
	// 		// window.location.href='#/products';
	// 	});
	// }

	$scope.removeProduct = function(id){
		$http.delete('/api/products/'+id).success(function(response){
		});
	}
});
