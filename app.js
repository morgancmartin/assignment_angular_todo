var app = angular.module('todoApp', []);


app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('TodoCtrl', ['$scope','$window', '_', 'todoService',
function($scope, $window, _, todoService){

  $scope.newTodo = {
    text: '',
    dueDate: '',
    completed: false
  };

  // State.
  $scope.items = todoService.items;
  $scope.item = todoService.item;

  $scope.removeCompleted = function() {
    todoService.removeCompleted();
  };

  $scope.createTodo = function() {
    $window.alert('Todo Created');
    todoService.createTodo(angular.copy($scope.newTodo));
    $scope.newTodo = {};
  };

  // Presentation.
  $scope.showText = "Show Completed";
  $scope.filterActive = false;

  $scope.showCompleted = function(){
    console.log($scope.sortOption);
    if ($scope.filterActive){
      $scope.showText = "Hide Completed";
    } else {
      $scope.showText = "Show Completed";
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
