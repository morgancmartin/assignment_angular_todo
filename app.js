var app = angular.module('todoApp', []);


app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('TodoCtrl', ['$scope','$window', '_', function($scope, $window, _){
  $scope.newTodo = {text: '', dueDate: '', completed: false};

  $scope.item = { text: "Get groceries from the store",
                  dueDate: new Date(),
                  completed: false };

  $scope.filterActive = false;

  $scope.showText = "Show Completed";

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
    $scope.newTodo = {};
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

  $scope.showCompleted = function(){
    if ($scope.filterActive){
      $scope.showText = "Hide Completed"
    } else {
      $scope.showText = "Show Completed"
    }
    $scope.filterActive = !$scope.filterActive;
    return;
  };

}]);

app.filter('checkVisible', function(){

    return function(items, flag){
      if(flag){
        var filtered = [];
        for (var i =0; i < items.length; i++){
            var item = items[i];
            if (!item.completed){
              filtered.push(item);
            }
        }
        return filtered;
      } else {
          return items;
      }
    };

});
