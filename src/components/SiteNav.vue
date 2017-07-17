<template>
  <header>
    <nav class="site-nav">
      <ul class="site-nav-left">
        <li class="site-nav-item">您好！欢迎来到中土世界！</li>
        <li class="site-nav-item"><a href="#">请登录</a></li>
        <li class="spacer"></li>
        <li class="site-nav-item"><a href="#">快速注册</a></li>
        <li class="spacer"></li>
        <li
          @mouseover="isMenuShow=true"
          @mouseleave="isMenuShow=false"
          :class="['site-nav-item', 'site-nav-world',{ 'site-nav-world-hover': isMenuShow}]"
        >
          <a href="#">我的世界<i class="site-nav-allow"></i></a>
          <ul v-show="isMenuShow" class="site-nav-menu-list">
            <li class="menu-item"><a href="#">我的订单</a></li>
            <li class="menu-item"><a href="#">我的收藏</a></li>
          </ul>
        </li>
      </ul>

      <ul class="site-nav-right">
        <li class="site-nav-item"><a href="#">我的订单</a></li>
        <li class="spacer"></li>
        <li class="site-nav-item"><a href="#">客户服务</a></li>
        <li class="spacer"></li>
        <li class="site-nav-item">关注我们：
          <a href="#"><i class="iconfont weibo-icon">&#xe67e</i>微博</a>
          <a href="#"><i class="iconfont weixin-icon">&#xe623</i>微信</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
  export default {
    name: 'site-nav',
    data() {
      return {
        isMenuShow: false,
      };
    },
    props: {

    },
    methods: {
    },
  };
</script>
<style>
  .site-nav {
    width: 100%;
    margin: 0 auto;
  }
  .site-nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .site-nav ul li {
    display: inline-block;
  }
  .site-nav ul li a {
    color: #333;
    text-decoration: none;
  }
  .site-nav ul li a:hover
  {
    color: #f35305
  }
  .site-nav .site-nav-item {
    padding: 10px;
    font-size: 12px;
  }
  .site-nav ul .spacer {
    width: 1px;
    height: 20px;
    background: #ddd;
    vertical-align: middle;
  }

  .site-nav-left {
    float: left;
  }
  .site-nav-allow {
    width: 0;
    height: 0;
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
    border: 4px solid transparent;
    border-top: 4px solid #000;
  }
  .site-nav-world {
    position: relative;
    border: 1px solid transparent;
    box-sizing: border-box;
  }
  .site-nav-menu-list {
    position: absolute;
    top: 33px;
    left: 5px;
    border: 1px solid #ddd;
    border-top: 0;
  }
  .site-nav-menu-list .menu-item {
    display: block;
    margin: 0;
    padding: 10px;
    background: #f6f6f6;
  }
  .site-nav-world-hover {
    background: #f6f6f6;
    border: 1px solid #ddd;
  }
  .site-nav-right {
    float: right;
  }
  .weibo-icon {
    color: #d81e06;
  }
  .weixin-icon {
    margin-left: 10px;
    color: #62b900;
  }
</style>
