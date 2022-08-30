<template>
  <div id="app">
    <div class="main">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Сalculator"/>
      <VCalc/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VCalc from './components/VCalc.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VCalc
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
