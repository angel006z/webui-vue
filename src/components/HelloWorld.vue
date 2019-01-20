<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>webstorm下运行项目，点击package.json->Show npm Scripts->dev</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
