app.controller('loginCtrl', function($scope, $http, $location){
	
	$scope.login= function(){
	
		$http.post('/api/user/login', $scope.user).then(function(response){
        window.location='/';
		});
	}

});
