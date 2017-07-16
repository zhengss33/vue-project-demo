<template>
  <transition-group
    name="list"
    tag="ul"
    class="todo-container"
  >
    <li
      v-for="(item, index) in list"
      :class="['list-item',{ finished: item.isFinished}]"
      :key="item.text"
    >
      <i v-if="item.isFinished" class="finished-icon"></i>
      <i v-else title="点击完成" class="unfinished-icon" @click="onFinished(item)"></i>
      <span class="text">{{ item.text }}</span>
      <i class="delete-icon" title="点击删除" @click="onDelete(index)"></i>
    </li>
  </transition-group>
</template>
<script>
  export default {
    name: 'todo-item',
    data() {
      return {

      };
    },
    props: {
      list: {
        type: Array,
      },
    },
    methods: {
      onFinished(item) {
        this.$emit('finished', item);
      },
      onDelete(index) {
        this.$emit('deleted', index);
      },
    },
  };
</script>
<style>
  .todo-container {
    width: 300px;
    min-height: 300px;
    margin: 0 auto;
    padding: 20px;
    text-align: left;
    border: 2px solid #42b983;
    border-radius: 10px;
    list-style: none;
  }
  .list-item {
    position: relative;
    height: 30px;
    line-height: 30px;
    word-wrap: break-word;
  }
  .finished {
    color: #42b983;
    text-decoration: line-through;
  }
  .unfinished-icon, .finished-icon {
    position: absolute;
    top: 2px;
    width: 24px;
    height: 24px;
  }
  .text {
    margin: 0 30px;
  }
  .unfinished-icon {
    background-image: url('../assets/icon/plan.png');
    cursor: pointer;
  }
  .finished-icon {
    background-image: url('../assets/icon/finished.png');
  }
  .delete-icon {
    position: absolute;
    top: 3px;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url('../assets/icon/delete.png');
    cursor: pointer;
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .list-enter {
    opacity: 0;
    transform: translateY(-30px);
  }
  .list-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
