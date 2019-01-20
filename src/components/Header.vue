<template>
  <div class="header-container">
    <div class="header">
      <a href="/">
        <img class="logo" src="../img/logo.png" />
      </a>
        <ul class="nav">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      <div class="right">
         <div class="user">
           您好，欢迎你
         </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  *{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}
  a{
    text-decoration: none;
  }
  .header-container{
    height: 56px;
    width: 100%;
    background-color: #fff;
    margin-bottom: 25px;
    border-bottom: #e3e3e3 1px solid;
  }
  .header{
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
  }
  .header .logo{
    display: block;
    height: 46px;
    margin-top: 3px;
    float: left;
    margin-right: 25px;
  }
  .header .nav{
    margin: 0 0 auto 20px;
    float: left;
    padding: 0;
  }
  .header .nav li{
    display: block;
    float: left;
    margin-right: 12px;
  }
  .header .nav li a{
    display: block;
    text-align: center;
    height: 55px;
    width: 60px;
    font-size: 16px;
    line-height: 55px;
    color: #333;
  }
  .header-container ul.nav li.active a,.header-container ul.nav li a:hover{border:1px solid #1dd388;background-color:#1dd388;color:#fff}
  .header .right{
    float:right;
  }
  .header .right .user{
    height: 55px;
    font-size: 16px;
    line-height: 55px;
  }
</style>
