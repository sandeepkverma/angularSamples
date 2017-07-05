
  var app = angular.module("myApp", []);

;(function(){
	'use strict';
  
  angular.module('myApp').directive('w3TestDirective',w3TestDirective);

  function w3TestDirective(){

  	  var directive =  {
  	  		link:link,
  	  		templateUrl:templateUrl,
  	  		restrict:'EA',
  	  		controller:w3TestController,
  	  		controllerAs:'weTest',
	        bindToController: true


  	  }

  	  return directive;

  	  function link(scope,element,attrs){

  	  	 /* implementation is here */

         scope.weTest.name = 'naresh kumar verma'

         element.on('click',function(){
           
         });

  	  }

      function templateUrl(element,attrs){
        return 'js/w3TestDirective/sample.directive.html';
      }

       // w3TestController.$inject = ['$scope'];
    function w3TestController(){
      var vm = this;
      vm.name = 'sandeep';
      vm.name1 = 'kumar';
    }
  }
     

})();
