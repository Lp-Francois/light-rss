<template>
	<div id="app" class="container grid-lg">

		<Rss/>
		
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
}
</style>
