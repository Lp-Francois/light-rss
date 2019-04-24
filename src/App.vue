<template>
  <div id="app">
    <Rss/>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
  </div>
</template>

<script>
import Rss from './components/Rss'

export default {
  name: 'app',
  components: {
    Rss
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
	margin-top: 200px;
}
</style>
