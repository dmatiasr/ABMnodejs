angular.module('app').controller('UserController', function ($scope, $http,$location,$window) {

    $scope.users=[];
    $scope.user='';
    var host = "http://localhost:3000/";

    load_users= function() {
      $http.get(host).then(function callback(res) {
        if (res.status==200){
          $scope.users=res.data;
        }else {
          alert('Error al traer los usuarios')
        }

        });
    }

      load_users();

})
