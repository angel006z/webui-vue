<template>
  <div class="container">
    <div class="container-title">
      <h2>金币充值</h2>
      <div class="info">
        <span>账户余额：</span>
        <span class="number">0</span> 金币
      </div>
    </div>
    <div class="container-main">
      <div class="item-money">
        <label class="item-title"> 请选择充值金额：</label>
        <Money></Money>
      </div>
      <div class="item-ratio">
        <label class="item-title"> 兑换金币比例：</label>
        <span class="number" style="color:#ff6a06">0</span>
        <span class="number1">金币<span class="desc">（兑换比例 1 元：10 金币）</span></span>
      </div>
      <div class="item-channel">
        <label class="item-title"> 支付方式：</label>
        <ChargeChannel></ChargeChannel>
      </div>
      <div class="item-confirm">
        <label class="item-title"></label>
        <button>确认充值</button>
      </div>
      <div class="item-tips">
        <p style="font-size: 14px;color: #ff4f4f;"></p>
      </div>
    </div>
  </div>
</template>

<script>

  import ChargeChannel from './charge-channel'
  import Money from './money'

  export default {
    name: 'ChargeIndex',
    components: {Money, ChargeChannel}
  }
</script>


<style scoped>

</style>
