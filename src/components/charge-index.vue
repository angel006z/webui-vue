<template>
  <div class="container">
    <div class="container-title">
      <h2>充值中心</h2>
    </div>
    <div class="container-main">
      <div class="row clearfix">
        <div class="title"> 当前充值账号：</div>
        <div class="content">
         AAA
        </div>
      </div><div class="row clearfix">
        <div class="title"> 请选择充值金额：</div>
        <div class="content">
          <Money></Money>
        </div>
      </div>
      <div class="row charge-custom clearfix">
        <div class="title"> 请输入充值金额：</div>
        <div class="content">
          <input type="text" name="price" maxlength="10" autocomplete="off"> 元
        </div>
      </div>
      <div class="row charge-cost clearfix">
        <div class="title"> 应付金额：</div>
        <div class="content">
          <span class="number" style="color:#ff6a06">100</span>
          <span class="number1">元</span>
        </div>
      </div>
      <div class="row clearfix">
        <div class="title"> 支付方式：</div>
        <div class="content">
          <ChargeChannel></ChargeChannel>
        </div>
      </div>
      <div class="row clearfix">
        <div class="title">&nbsp;</div>
        <div class="content">
          <button class="confirm-charge">确认充值</button>
        </div>
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
