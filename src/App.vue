<template>
	<div id="app" data-theme="light">
		<div>
			<Header/>
		</div>

		<div class="container grid-lg">
			<Rss/>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Rss from './components/Rss.vue';

export default {
	name: 'app',
	components: {
		Header,
		Rss,
	},
}
</script>

<style>
:root {
    --primary-color: #42b883;
    --secondary-color: #35495e;
    --font-color: #424242;
    --font-color-visited: #828282;
    --bg-color: #F4F4F4;
    --secondary-bg-color: #F4F4F4;
    --heading-color: #292922;
}

[data-theme="dark"] {
    --primary-color: #42b883;
    --secondary-color: #818cab;
    --font-color: #e1e1ff;
    --font-color-visited: rgb(169, 169, 179);;
    --bg-color: #181E24;
    --secondary-bg-color: #1F2831;
    --heading-color: #818cab;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--font-color);
	background-color: var(--bg-color);
	min-height: 100vh;
}

a {
	color: var(--primary-color);
}
</style>
