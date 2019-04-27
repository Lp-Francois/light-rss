<template>
	<div>
		<header class="header">
			<nav class="container grid-lg nav-header">
				<a href="https://github.com/AsterYujano/light-rss">
					<img class="logo" alt="logo" src=".././assets/vue-rss.png">
				</a>
				<h4 class="title">Light-rss</h4>

				<label class="switch" v-on:click="toggle">
					<input type="checkbox">
					<span class="slider round"></span>
				</label>
			</nav>
		</header>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {

		}
	},
	mounted: function() {
		const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
		const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

		if (currentTheme) {
		    document.documentElement.setAttribute('data-theme', currentTheme);

		    if (currentTheme === 'dark') {
		        toggleSwitch.checked = true;
		    }
		}
	},
	methods: {
		toggle: function(e) {
			if (e.target.checked) {
		        document.documentElement.setAttribute('data-theme', 'dark');
		        localStorage.setItem('theme', 'dark');
		    }
		    else {
		        document.documentElement.setAttribute('data-theme', 'light');
		        localStorage.setItem('theme', 'light');
		    }
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
