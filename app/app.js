let app = angular.module('meanApp', ['angularModalService','ui.router','shopList','shopItem']);
app.controller('login', function($http){
    
    $http({
        method: 'POST',
        url: '/api/user/register',
        data: {username: 'du', password: 'duc'},
        json: true
    }).then(function(res) {
        console.log(res);
        $http({
            method: 'POST',
            url: '/api/user/login',
            data: res.data,
            json:true
        }).then(function(res) {console.log(res)})
        .catch(function(err) {console.log(err);});
    })
    .catch(function(err) {console.log(err);});
});