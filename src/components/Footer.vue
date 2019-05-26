<template>
	<div>
		<footer class="footer">
			<nav class="container grid-lg nav-footer">	
				<a href="https://github.com/AsterYujano/light-rss">
					<img class="logo" alt="logo" src=".././assets/vue-rss.png">
				</a>

				<a href="https://github.com/AsterYujano/light-rss">Source code</a>
			</nav>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {

		}
	},
}
</script>

<style scoped>
.footer {
	height: 100px;
	background-color: var(--secondary-bg-color);
	margin-top: 15px;
}

.nav-footer {
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.logo {
	width: 30px;
	height: 30px;
	margin-left: 15px;
	margin-top: 7px;
}
</style>
