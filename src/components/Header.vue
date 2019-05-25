<template>
	<header class="header">
		<nav class="container grid-lg nav-header">
			<a href="https://github.com/AsterYujano/light-rss">
				<img class="logo" alt="logo" src=".././assets/vue-rss.png">
			</a>
			<h4 class="title">Light-RSS</h4>
		
			<svg class="theme-toggler" v-on:click="themeToggle" width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
				3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
				13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"/>
			</svg>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {

		}
	},
	mounted: function() {
		const getTheme = window.localStorage && window.localStorage.getItem("theme");
		const themeToggle = document.querySelector(".theme-toggle");
		const isDark = getTheme === "dark";

		if (getTheme !== null) {
			document.body.classList.toggle("dark-theme", isDark);
		}
	},
	methods: {
		themeToggle: function(e) {
			document.body.classList.toggle("dark-theme");

			window.localStorage && window.localStorage.setItem(
				"theme",
				document.body.classList.contains("dark-theme") ? "dark" : "light",
			);
		}
	}
}
</script>

<style scoped>
.header {
	height: 45px;
	background-color: var(--secondary-bg-color);
	margin-bottom: 15px;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.13);
}

.nav-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
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

svg {
	fill: currentColor;
	margin-right: 0.5rem;
}

.theme-toggler {
	cursor: pointer;
}

/* Switch Checkbox*/
 /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--primary-color);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--primary-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} 
</style>
