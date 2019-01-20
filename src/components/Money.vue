<template>
  <ul class="charge-money">
    <li class="active">
      <a href="#">10元</a>
    </li>
    <li id="money_def_cli" class="">
      <a href="#">20元</a>
    </li>
    <li class="">
      <a href="#">50元</a>
    </li>
    <li>
      <a href="#">100元</a>
    </li>
    <li>
      <a href="#">500元</a>
    </li><li>
      <a href="#">1000元</a>
    </li>
    <li class="last-li active error">
      <div class="input-group" style="border:0px">
        <input style="line-height:30px; " type="text" placeholder="其他金额" maxlength="6" autocomplete="off">
        <div class="addon">元</div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Money'
  }
</script>

<style scoped>


</style>
