var app = angular.module('todoApp', []);


app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('TodoCtrl', ['$scope','$window', '_', function($scope, $window, _){
  $scope.newTodo = {text: '', dueDate: '', completed: false};

  $scope.item = { text: "Get groceries from the store",
                  dueDate: new Date(),
                  completed: false };

  $scope.clearCompleted = function() {
    var item;
    for(var i = $scope.items.length - 1; i >= 0; i--){
      item = $scope.items[i];
      if(item.completed){
        console.log(item);
        $scope.items.splice(i, 1);
      }
    }
  };

  $scope.createTodo = function() {
    $window.alert('Todo Created');
    $scope.items.push({
      text: $scope.newTodo.text,
      dueDate: $scope.newTodo.dueDate,
      completed: $scope.newTodo.completed
    });
    $scope.newTodo.text = '';
    $scope.newTodo.dueDate = '';
    $scope.newTodo.completed = false;
  };

  $scope.removeTodo = function(item){
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };

  $scope.items = [
    {text: 'Get a job', dueDate: new Date(), completed: false},
    {text: 'Get a milli', dueDate: new Date(), completed: false},
    {text: 'Get a billi', dueDate: new Date(), completed: false},
  ];
}]);
