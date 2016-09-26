var app = angular.module('todoApp', []);


app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.controller('TodoCtrl', ['$scope','$window', '_', 'todoService',
function($scope, $window, _, todoService){

  // State.
  $scope.items = todoService.items;
  $scope.item = todoService.item;
  $scope.clearCompleted = todoService.clearCompleted;
  $scope.createTodo = todoService.createTodo;

  // Presentation.
  $scope.showText = "Show Completed";
  $scope.filterActive = false;

  $scope.showCompleted = function(){
    if (todoService.filterActive){
      todoService.showText = "Hide Completed";
    } else {
      todoService.showText = "Show Completed";
    }
    todoService.filterActive = !todoService.filterActive;
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
