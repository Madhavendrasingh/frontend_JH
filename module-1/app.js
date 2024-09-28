// ( function(){
//   'user strict';
//
//   angular.module('DIapp',[])
//   .controller('DIController', DIController);// can also supply it with ('DIController',['$scope','$filter',DIController])
//   DIController.$inject=['$scope','$filter'];
//   function DIController($scope, $filter){
//     $scope.name="maddy";
//     $scope.upper=function(){
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     };
//   }
// })();

//minified version
!function(){function e(e,n){e.name="maddy",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIapp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
