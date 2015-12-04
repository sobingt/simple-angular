 //Added Array in controller function for minification
    angular.module('myApp',['ngRoute'])
    .config(function( $routeProvider){
      $routeProvider
      .when('/',{
        templateUrl: 'list.html',
        controller: 'Ctrl'
      })
      .when('/edit/:id',{
        templateUrl: 'edit.html',
        controller: 'Edit'
      })
    })
    .run(function($rootScope){
      $rootScope.people =[
              {
                name: "Sobin", 
                age: 23
              },
              {
                name: "Darshan",
                age: 74
              },
              {
                name: "Prath",
                age: 20
              },
              {
                name: "Surya",
                age: 28
              },
              {
                name: "Hari",
                age: 13
              }
            ];
    })
    .controller('Ctrl',['$scope','$rootScope','$location', function(scope, rootScope, location){
        console.log(scope);
            scope.addStatus = true;
            scope.name = "Rafal";
            scope.age = "28";
            scope.persons=['Tom', 'Jerry']; 
            
          scope.add = function(){
            scope.people.push(scope.person);
            scope.person ={};
            location.path('/');
          };
          scope.remove = function(index){
            rootScope.people.splice(index, 1);
          };
          scope.edit = function(index){
            scope.addStatus = false;
            scope.person = rootScope.people[index];
          };
          scope.save = function(){
            scope.addStatus = true;
            scope.person = [];
          };
        
          
          
      
    }])
   .controller('Edit',['$scope','$routeParams' function(scope, routeParams){
      scope.id =routeParams.id
    }]);

//Second Version
//
//    angular.module('myApp',['ngRoute']).config(function( $routeProvider){
//      $routeProvider
//      .when('/',{
//        templateUrl: 'list.html',
//        controller: 'Ctrl'
//      })
//      .when('/edit/:id',{
//        templateUrl: 'edit.html',
//        controller: 'Edit'
//      })
//    });
//
//     angular.module('myApp',['ngRoute']).run(function($rootScope){
//      $rootScope.people =[
//              {
//                name: "Sobin", 
//                age: 23
//              },
//              {
//                name: "Darshan",
//                age: 74
//              },
//              {
//                name: "Prath",
//                age: 20
//              },
//              {
//                name: "Surya",
//                age: 28
//              },
//              {
//                name: "Hari",
//                age: 13
//              }
//            ];
//    });
//
//     angular.module('myApp',['ngRoute']).controller('Ctrl',['$scope','$rootScope','$location', function(scope, rootScope){
//        console.log(scope);
//            scope.addStatus = true;
//            scope.name = "Rafal";
//            scope.age = "28";
//            scope.persons=['Tom', 'Jerry']; 
//            
//          scope.add = function(){
//            scope.people.push(scope.person);
//            scope.person ={};
//          };
//          scope.remove = function(index){
//            rootScope.people.splice(index, 1);
//          };
//          scope.edit = function(index){
//            scope.addStatus = false;
//            scope.person = rootScope.people[index];
//          };
//          scope.save = function(){
//            scope.addStatus = true;
//            scope.person = [];
//          };
//          
//          
//      
//    }]);
//
//    angular.module('myApp',['ngRoute']).controller('Edit',['$scope','$routeParams' function(scope, routeParams){
//      scope.id =routeParams.id
//    }]);


angular.module('myApp',['ngRoute']).config().run().controller().controller();