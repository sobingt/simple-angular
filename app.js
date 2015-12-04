 //Added Array in controller function for minification
    angular.module('myApp',['ngRoute'])
    .config(function( $routeProvider){
      $routeProvider
      .when('/',{
        templateUrl: 'filter.html',
        controller: 'FilterCtrl'
      })
    })
    .filter('slug', function(){
      
      return function(input, sign){
          return input+' st'
      }
      
    })
    .directive('click', [function () {
      return {
          restrict: 'A',
          link: function (scope, iElement, iAttrs) {
              iElement.bind('click', function(){
                  scope.$eval(iAttrs.click);
              });
          }
      };
    }])
    .directive('myCard', [function () {
      return {
          restrict: 'E',
		  replace: true,
		  transclude: true,
		  template: '<div class="card">Hello Card</card>',
          link: function (scope, iElement, iAttrs) {
              iElement.bind('click', function(){
                  scope.$eval(iAttrs.click);
              });
          }
      };
    }])
    .controller('FilterCtrl',['$scope','$routeParams', function(scope, routeParams)
	{
		scope.name = "The Good Goa Cat";
		scope.a = function(){
			console.log("The Bad Boys");
		};
    }]);

