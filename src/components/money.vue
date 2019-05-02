<template>
  <ul class="charge-money">
    <li class="item" v-bind:class="activePrice=='100'?'active':''" data-price="100" v-on:click="choiceMoney(100)">
      <a href="javascript:void(0);"><b class="price">
        100元
      </b></a>
    </li>
    <li class="item" v-bind:class="activePrice=='200'?'active':''" data-price="200" v-on:click="choiceMoney(200)">
      <a href="javascript:void(0);"><b class="price">
        200元
      </b></a>
    </li> <li class="item" v-bind:class="activePrice=='500'?'active':''" data-price="500" v-on:click="choiceMoney(500)">
      <a href="javascript:void(0);"><b class="price">
        500元
      </b></a>
    </li>
    <li class="item" v-bind:class="activePrice=='1000'?'active':''" data-price="1000" v-on:click="choiceMoney(1000)">
      <a href="javascript:void(0);">
        <b class="price">
          1000元
        </b>
      </a>
    </li> <li class="item" v-bind:class="activePrice=='2000'?'active':''" data-price="2000" v-on:click="choiceMoney(2000)">
      <a href="javascript:void(0);">
        <b class="price">
          2000元
        </b>
      </a>
    </li>
    <li class="item" v-bind:class="activePrice=='1'?'active':''" data-price="1" v-on:click="choiceMoney(1)">
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
    name: 'Money',
    data:function(){
      return {
        activePrice:"100"
      }
    },
    methods:{
      choiceMoney:function (price) {
        this.activePrice=price;
      }
    }
  }
</script>

<style scoped>


</style>
