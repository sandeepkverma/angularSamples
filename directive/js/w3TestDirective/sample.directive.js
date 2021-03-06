
  var app = angular.module("myApp", ['sharedWidget']);

  app.run(function($rootScope){
    $rootScope.anyList  = [{
                id:1,
                name:'Sandeep Kumar'
            },
            {
                id:2,
                name:'Naresh Kumar'
            },
            {
                id:3,
                name:'Pawan Kumar'
            },
            {
                id:4,
                name:'Uday Singh'
            },
            {
                id:5,
                name:'Sunil Kumar'
            }];

  });

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
           alert('hi');
           alert(attrs.name);
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
