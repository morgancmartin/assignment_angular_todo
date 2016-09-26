app.factory('todoService', function() {

  var todoService = {};

  todoService.newTodo = {
    text: '',
    dueDate: '',
    completed: false
  };

  todoService.item = {
    text: "Get groceries from the store",
    dueDate: new Date(),
    completed: false
  };

  todoService.clearCompleted = function() {
    var item;
    for(var i = todoService.items.length - 1; i >= 0; i--){
      item = todoService.items[i];
      if(item.completed){
        console.log(item);
        todoService.items.splice(i, 1);
      }
    }
  };

  todoService.createTodo = function() {
    $window.alert('Todo Created');
    todoService.items.push({
      text: todoService.newTodo.text,
      dueDate: todoService.newTodo.dueDate,
      completed: todoService.newTodo.completed
    });
    todoService.newTodo = {};
  };

  todoService.removeTodo = function(item){
    var index = todoService.items.indexOf(item);
    todoService.items.splice(index, 1);
  };

  todoService.items = [
    {text: 'Get a job', dueDate: new Date(), completed: false},
    {text: 'Get a milli', dueDate: new Date(), completed: false},
    {text: 'Get a billi', dueDate: new Date(), completed: false},
  ];

  return todoService;

});
