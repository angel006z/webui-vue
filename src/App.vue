<template>
  <div id="app" class="wrapper">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/header'
  import './css/normalize.min.css'
  import './css/charge.css'
  import Footer from './components/footer'

  export default {
    name: 'App',
    components: {
      Footer,
      Header
    }
  }
</script>

<style>
  #app {
  }
</style>
