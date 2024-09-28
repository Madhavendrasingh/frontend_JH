(function(){
  'use strict';
  angular.module('myfirstApp',[])
  .controller('MyFirstController',function($scope ){
    $scope.name="";
    $scope.totalValue = 0;
    $scope.getNameValue =function () {
      var score = calculateScore($scope.name);
      $scope.totalValue = score;
    }

    function calculateScore(string){
      var name_score = 0;
      for(var i=0; i<string.length;++i){
        name_score+=string.charCodeAt(i);
      }

      return name_score;
    }

  })

})();//no local variables bleed into the global scope prevented by ()()
