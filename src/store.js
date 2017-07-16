export default {
  fetch() {
    const todoList = window.localStorage.todoList && JSON.parse(window.localStorage.TodoList);
    return todoList || [];
  },
  save(items) {
    window.localStorage.todoList = JSON.stringify(items) || [];
  },
};
