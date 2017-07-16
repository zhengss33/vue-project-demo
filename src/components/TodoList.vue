<template>
  <div class="container">
    <input
      type="text"
      class="todo-input"
      v-model="todo"
      placeholder="enter todo list"
      @keyup.enter="addTodoList"
    />
    <todo-item
      :list="todoList"
      v-on:finished="todoFinished"
      v-on:deleted="todoDeleted"
    ></todo-item>
  </div>
</template>

<script>
  import TodoItem from './TodoItem';
  import store from '../store';

  export default {
    name: 'TodoList',
    data() {
      return {
        todo: '',
        todoList: store.fetch(),
      };
    },
    components: {
      TodoItem,
    },
    watch: {
      todoList: {
        handler(newList) {
          store.save(newList);
        },
        deep: true,
      },
    },
    methods: {
      addTodoList() {
        if (!this.todo) { return; }
        this.todoList.push({
          text: this.todo,
          isFinished: false,
        });
        this.todo = '';
      },
      todoFinished(item) {
        const todo = item;
        todo.isFinished = true;
      },
      todoDeleted(index) {
        this.todoList.splice(index, 1);
      },
    },
  };
</script>

<style>
  .todo-input {
    outline: none;
    width: 200px;
    height: 25px;
    margin-bottom: 20px;
    line-height: 25px;
    padding: 0 5px;
  }
</style>
