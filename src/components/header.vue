<template>
  <div class="header-container">
    <div class="header">
      <a href="/">
        <img class="logo" src="../img/logo.png" />
      </a>
        <ul class="nav">
          <li v-bind:class="activeNumber === 0 ? 'active' : ''" v-on:click="activeNumber=0"><router-link to="/">首页</router-link></li>
          <li v-bind:class="activeNumber === 1 ? 'active' : ''" v-on:click="activeNumber=1"><router-link to="/about-commpany" style="width: 80px;">公司介绍</router-link></li>
          <li v-bind:class="activeNumber === 2 ? 'active' : ''" v-on:click="activeNumber=2"><router-link to="/about-contact-us" style="width: 80px;">关于我们</router-link></li>
        </ul>
      <div class="right">
         <div class="user">
           <div v-if="isLogin===false" class="login-no">
            <span>
              <span><router-link to="/login">登录</router-link></span> |
               <span><a href="">注册</a></span>
            </span>
           </div>
           <div v-else class="login-ok">
            <span>
                您好，欢迎你
            </span>
           </div>
         </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Header",
      data:function () {
        // data 选项是一个函数，组件不相互影响
        return {
          activeNumber: 0,
          isLogin: false
        }
      }
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
    width: 1200px;
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
