<template>
	<div class="post">
		<a class="title-link" :href="postUrl" target="_blank">
			<strong>{{ title }}</strong>
		</a>
		<i> ({{ from }})</i>
		<br>
		<i class="i-date">{{ pubDate }}</i>
		<br>
		<p v-html="description"></p>
		<a :href="postUrl" target="_blank">Read more</a>
	</div>
</template>

<script>
export default {
	name: 'Post',
	data() {
		return {
			
		}
	},
	props: {
		title: String,
		description: String,
		postUrl: String,
		pubDate: String,
		from: String
	}
}
</script>

<style scoped>
.post p {
	margin-bottom: 0;
	font-size: .7rem;
}

.post .i-date {
	font-size: .6rem;
}

.title-link, .title-link:hover {
	color: var(--font-color-primary);
}

p {
	color: var(--font-color-secondary);
}

i {
	color: var(--font-color-tertiary);
}

a:visited {
	color: var(--font-color-visited);
}
</style>
