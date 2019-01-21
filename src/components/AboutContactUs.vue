<template>
  <div class="container">
  <div class="about-contact-us">
    <div class="item">
      <label>公司名称：</label><span>上海黑壳信息科技有限公司</span>
    </div>
    <div class="item">
      <label>地址：</label><span>上海市嘉定区江桥镇华江路129弄6号楼2240室</span>
    </div>
    <div class="item">
      <label>电话：</label><span>136****3658</span>
    </div>
    <div class="item">
      <label>e-mail：</label><span>123@163.com</span>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutContactUs'
  }
</script>

<style scoped>
  .about-contact-us {
    padding: 30px;
    background: #fff;
    min-height: 500px;
  }

  .about-contact-us .item {
    height: 40px;
    line-height: 40px;
  }

  .about-contact-us .item label {
    color: #bbb;
    width: 120px;
    display: inline-block;
    text-align: right;
  }

  .about-contact-us .item span {

  }
</style>
