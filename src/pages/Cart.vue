<template>
  <div class="cart">
    <top-banner></top-banner>
    <page>
      <site-nav></site-nav>
      <cart-step-bar></cart-step-bar>
    </page>
  </div>
</template>
<script>
  import Page from '../components/Page';
  import TopBanner from '../components/TopBanner';
  import SiteNav from '../components/SiteNav';
  import CartStepBar from '../components/CartStepBar';

  export default {
    name: 'cart',
    components: {
      TopBanner,
      Page,
      SiteNav,
      CartStepBar,
    },
  };
</script>
