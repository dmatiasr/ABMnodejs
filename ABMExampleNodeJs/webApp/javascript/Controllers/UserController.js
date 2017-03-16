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
      $scope.create= function () {
        console.log($scope.user)
        //some validation client-side TODO
        $http.post(host,{
            name : $scope.user.name,
            email : $scope.user.email,
            password: $scope.user.password
        }).success( function (data,status) {
          console.log(status);
          load_users();
          $scope.msg="ok";
        }).error(function(data,status){
          $scope.msg="error"
        })
      }
      $scope.delete=function (id) {
        $http.delete(host+'delete/'+id)
        .success(function (data,status) {
          alert(status)
          load_users();
          $scope.msg ="ok"
        }).error(function (data,status) {
          $scope.msg="error"
        });
      }

      $scope.edit = function(id){
        $http.get(host+id).then(function (response) {
          if (response.status==200){
            console.log(response.data);
            $scope.user=response.data;

          }else {
            $scope.msg="Algo paso";
          }
        })
      }

      $scope.update = function (id) {
        console.log("side client "+id);
        $http.put(host+'update/'+id,
        {
          name: $scope.user.name,
          email:$scope.user.email,
          password:$scope.user.password
        })
        .success(function (data,status){
          if (status==201){
            $scope.msg="Guardado"
            load_users();
          }else{
            $scope.msg="error"
          }
        })
      }
      $scope.clear= function () {
        $scope.user="";
      }
})
