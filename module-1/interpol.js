( function(){
  'user strict';

  angular.module('DIapp',[])
  .controller('DIController', DIController)
  .controller('messageController', messageController);// can also supply it with ('DIController',['$scope','$filter',DIController])
  DIController.$inject=['$scope','$filter'];
  function DIController($scope, $filter){
    $scope.name="maddy";
    $scope.upper=function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }
  function messageController($scope){
    $scope.message = "Message maddy!";
    $scope.imageState="singh";
    $scope.flip=()=>{
      $scope.imageState = ($scope.imageState==='Negi') ? 'singh' : 'Negi';
    };
    $scope.sayMessage = function(){
      return "Some message from maddy!";
    }
  }
})();
