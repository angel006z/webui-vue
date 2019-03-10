<template>
  <ul class="charge-money">
    <li class="item active" data-price="100">
      <a href="javascript:void(0);"><b class="price">
        100元
      </b></a>
    </li>
    <li class="item" data-price="200">
      <a href="javascript:void(0);"><b class="price">
        200元
      </b></a>
    </li> <li class="item" data-price="500">
      <a href="javascript:void(0);"><b class="price">
        500元
      </b></a>
    </li>
    <li class="item" data-price="1000">
      <a href="javascript:void(0);">
        <b class="price">
          1000元
        </b>
      </a>
    </li> <li class="item" data-price="2000">
      <a href="javascript:void(0);">
        <b class="price">
          2000元
        </b>
      </a>
    </li>
    <li class="item" data-price="1">
      <a class="custom" href="javascript:void(0);">
        <strong class="amount">
          自定义
        </strong>
        <strong class="amount">
          充值金额
        </strong>
      </a>
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
