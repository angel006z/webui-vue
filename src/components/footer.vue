<template>
  <div class="footer-container">
    <div class="footer">
      <div class="text">
        <p>沪ICP备15043293号 | <a href="http://www.panda.tv/news/1101414857/3700943925/3701130188.html" target="_blank">沪网文[2015]0826-226号</a> | <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010802001046"><img src="/img/d0289dc0a46fc5b15b3363ffa78cf6c7.png">沪公网安备 31010802001046号</a></p>
        <p>上海**信息科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .footer-container {
    width: 100%;
  }

  .footer-container .footer {
    overflow: hidden;
    background-color: #37363c;
    min-width: 1210px;
    width: auto !important;
    position: relative;
    text-align: center;
    padding: 35px 0 70px 0;
    color: #959ba8
  }

  .footer-container .logo {
    display: inline-block;
    width: 116px;
    height: 48px
  }

  .footer-container .text {
    line-height: 7px;
    height: 48px;
    padding-top: 10px;
    display: inline-block;
    font-size: 12px
  }

  .footer-container a {
    color: #959ba8
  }

  .footer-container a img {
    position: relative;
    top: -2px;
    margin-right: 2px;
    vertical-align: middle
  }
</style>
