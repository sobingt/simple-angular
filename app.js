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
          return input.toLowerCase()
						.replace(/\s+/g,(sign || '-'));
      }
      
    })
    .controller('FilterCtrl',['$scope','$routeParams', function(scope, routeParams){
      scope.name = "The Good Goa Cat";
    }]);

