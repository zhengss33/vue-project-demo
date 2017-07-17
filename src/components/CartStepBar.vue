<template>
  <div class="step-bar">
    <div :class="['step', { 'step-done': step >= 1 }]"><i class="step-num">1</i>我的购物车</div>
    <div :class="['step', { 'step-done': step >= 2 }]"><i class="step-num">2</i>填写并核对订单信息</div>
    <div :class="['step', { 'step-done': step === 3 }]"><i class="step-num">3</i>支付订单</div>
  </div>
</template>

<script>
  export default {
    name: 'cart-step-bar',
    props: {
      step: {
        type: Number,
        default: 1,
      },
    },
  };
</script>

<style>
  .step-bar {
    clear: both;
    width: 978px;
    overflow: hidden;
  }
  .step {
    float: left;
    width: 326px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    font-weight: 400;
    background: #efefef;
  }
  .step-num {
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-right: 8px;
    line-height: 22px;
    vertical-align: middle;
    font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
    border-radius: 50%;
    background: #fff;
  }
  .step-done {
    position: relative;
    color: #fff;
    background: #f35305;
  }
  .step-done::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -20px;
    margin-top: -10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left: 10px solid #f35305;
  }
  .step-done .step-num {
    color: #f35305;
  }
</style>
