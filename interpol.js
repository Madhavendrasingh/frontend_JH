( function(){
  'user strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController)
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.list='';
    $scope.value='';
    $scope.checkLimit=function(){
      var data = $scope.list.split(',');
      var count = 0;
      for (let i=0; i<data.length;++i){
        data[i]= data[i].trim();
        if(data[i] !== '') count+=1
      }
      $scope.value = count === 0 ? 'Please enter data first' : count <= 3 ? 'Enjoy!' : 'Too much!';
    };
  }
})();

//min Check
//!function(){function e(e){e.list="",e.value="",e.checkLimit=function(){var t=e.list.split(","),n=0;for(let c=0;c<t.length;++c)t[c]=t[c].trim(),""!==t[c]&&(n+=1);e.value=0===n?"Please enter data first":n<=3?"Enjoy!":"Too much!"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
