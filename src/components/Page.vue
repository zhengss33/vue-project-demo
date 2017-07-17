<template>
  <div class="page">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'page',
  };
</script>
<style>
  .page {
    width: 980px;
    margin: 0 auto;
  }
</style>
