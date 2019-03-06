<template>
  <ul class="charge-channel">
    <li class="alipay active" data-channel="alipay">
      <a href="#">支付宝</a>
    </li>
    <li class="weixin" data-channel="weixin">
      <a href="#">微信</a>
    </li>
    <li class="paynowzs" data-channel="paynowzs">
      <a href="#">二维码支付</a>
      <span class="cut-off"></span>
      <p class="cut-off-tip"></p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ChargeChannel'
  }
</script>

<style scoped>

</style>
