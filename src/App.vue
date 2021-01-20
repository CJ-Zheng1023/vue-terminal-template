<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div style="width: 100%;height: 600px;border: 1px solid #5d535a;padding: 1px;">
      <terminal></terminal>
    </div>
  </div>
</template>

<script>
import Terminal from './components/terminal/Index'

export default {
  name: 'App',
  components: {
    Terminal
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
