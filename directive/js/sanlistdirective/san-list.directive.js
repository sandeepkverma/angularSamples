;(function(){
    'use strict';

    angular.module('sharedWidget',[]).directive('sanListDirective',sanList);

    function sanList(){
        var directive = {
            link:link,
            templateUrl:templateUrl,
            restrict:'EA',
            controller:SanListController,
            controllerAs:'sl',
             scope: {
                sanListOptions: '=',
                ngModel:'='
            }
        }

        return directive;

        function link(scope,element,attrs){

            // alert(scope.sanListOptions);
            // alert(attrs.myHello);
            element.on('click',function(event){
                alert('click');
            });

            element.on('mouseover',function(event){
                element.find('li').removeClass('active');
                angular.element(event.target).addClass('active');
            })

            scope.$watch('sanListOptions',function(value){
                scope.sl.anyList = value;
            })

            scope.$watch('sl.slcItem',function(value){
                scope.ngModel = value;
            });
            
        }

        function templateUrl(element,attrs){
            return 'js/sanlistdirective/san-list.directive.html';
        }

        // SanListController.$inject = ['$scope'];

        function SanListController(){
            var vm = this;
            vm.name = 'sandeep kumar verma';
            vm.slcItem = {};
            var anyList = [{
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
            }]

            vm.anyList = anyList;

            vm.selectedItem = function(item){
                vm.slcItem = item;
            }
        }
    }

})();