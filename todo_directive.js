app.directive('todoDirective', [function() {
  return {
    templateUrl: 'todo_directive.html',
    restrict: 'A',
    scope: {
      item: '='
    }
  };

}]);
