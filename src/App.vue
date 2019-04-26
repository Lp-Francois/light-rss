<template>
	<div id="app" data-theme="light">
		<header class="header">
			<nav class="container grid-lg nav-header">
				<a href="https://github.com/AsterYujano/light-rss">
					<img class="logo" alt="logo" src="./assets/vue-rss.png">
				</a>
				<h4 class="title">Light-rss</h4>
			</nav>
		</header>

		<div class="container grid-lg">
			<Rss/>
		</div>

	</div>
</template>

<script>


/* View */
import Rss from './components/Rss'

export default {
	name: 'app',
	components: {
		Rss
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
    --font-color-visited: #f5f5ff;
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

.header {
	height: 45px;
	background-color: var(--secondary-bg-color);
	margin-bottom: 15px;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.13);
}

.nav-header {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}

.title {
	margin-bottom: 0;
}

.logo {
	width: 30px;
	height: 30px;
	margin-right: 15px;
	margin-top: 7px;
}

a {
	color: var(--primary-color);
}

</style>
