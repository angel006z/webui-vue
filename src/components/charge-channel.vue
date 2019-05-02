<template>
  <ul class="charge-channel">
    <li class="alipay" v-bind:class="activeChannel==='alipay'?'active':''"  v-on:click="channel='alipay'" data-channel="alipay">
      <a href="javascript:void(0);">
        <img src="../img/charge-channel-alipay.jpg" height="38" width="107"/>
      </a>
    </li>
    <li class="weixin" v-bind:class="activeChannel==='weixin'?'active':''"  v-on:click="channel='weixin'" data-channel="weixin">
      <a href="javascript:void(0);"><img src="../img/charge-channel-weixin.jpg" height="38" width="107"/></a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ChargeChannel',
    data:function () {
      return {
        activeChannel:"alipay"
      }
    }
  }
</script>

<style scoped>

</style>
