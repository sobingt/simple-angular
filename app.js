 //Added Array in controller function for minification
    angular.module('myApp',['ngRoute'])
    .config(function( $routeProvider){
      $routeProvider
      .when('/',{
        templateUrl: 'list.html',
        controller: 'Ctrl'
      })
      .when('/edit',{
        templateUrl: 'edit.html',
        controller: 'Edit'
      })
    })
    .controller('Ctrl',['$scope', function(scope){
        console.log(scope);
            scope.addStatus = true;
            scope.name = "Rafal";
            scope.age = "28";
            scope.persons=['Tom', 'Jerry']; 
            scope.people =[
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
          scope.add = function(){
            scope.people.push(scope.person);
            scope.person ={};
          };
          scope.remove = function(index){
             scope.people.splice(index, 1);
          };
          scope.edit = function(index){
            scope.addStatus = false;
            scope.person = scope.people[index];
          };
          scope.save = function(){
            scope.addStatus = true;
            scope.person = [];
          };
          
          
      
    }])
   .controller('Edit',['$scope', function(scope){

    }]);