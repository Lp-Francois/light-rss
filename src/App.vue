<template>
	<div id="app" data-theme="light">
		<Header/>

		<div class="container grid-lg">
			<Rss/>
		</div>

		<Footer/>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Rss from './components/Rss.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'app',
	components: {
		Header,
		Rss,
		Footer
	},
}
</script>

<style>
:root {
    --primary-color: #42b883;
    --secondary-color: #35495e;

    --bg-color: #fff;
    --secondary-bg-color: #FAFAFA;

    --font-color-primary: hsl(0, 0%, 13%);
    --font-color-secondary: hsl(0, 0%, 29%);
    --font-color-tertiary: hsl(0, 0%, 45%);

    --font-color-visited: #828282;
}

.dark-theme {
	--primary-color: #42b883;
    --secondary-color: #818cab;

    --bg-color: #181E24;
    --secondary-bg-color: #1F2831;

    --font-color-primary: #fff;
    --font-color-secondary: #e1e1ff;
    --font-color-tertiary: #e1e1ff;

    --font-color-visited: rgb(169, 169, 179);
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--font-color-primary);
	background-color: var(--bg-color);
	min-height: 100vh;
}

a {
	color: var(--primary-color);
}

a:hover, a:clicked {
	color: var(--secondary-color);
}
</style>
