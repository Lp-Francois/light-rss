<template>
	<div class="post">
		<a class="title-link" :href="postUrl" target="_blank">
			<strong>{{ title }}</strong>
		</a>
		<i> ({{ from }})</i>
		<br>
		<i class="i-date">{{ pubDate | dateFormat }}</i>
		<br>
		<p v-html="description"></p>
	</div>
</template>

<script>
export default {
	name: 'Post',
	data() {
		return {}
	},
	props: {
		title: String,
		description: String,
		postUrl: String,
		pubDate: String,
		from: String
	},
	filters: {
		dateFormat: function(date) {
			return new Date(date).toUTCString();
			//new_date.slice(0, new_date.lastIndexOf(":"));
		}
	}
}
</script>

<style>
.post {
	box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
	padding: 1rem;
	border-radius: 5px;
	margin-bottom: 0.3rem;
}

.post p {
	margin-bottom: 0;
	font-size: .7rem;
	color: var(--font-color-secondary);
}

.post .i-date {
	font-size: .6rem;
}

.title-link, .title-link:hover {
	color: var(--font-color-primary);
}

.post i {
	color: var(--font-color-tertiary);
}

a:visited {
	color: var(--font-color-visited);
}
</style>
