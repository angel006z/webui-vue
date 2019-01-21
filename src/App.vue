<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import './css/normalize.min.css'
  import './css/charge.css'
  import Footer from './components/Footer'

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
