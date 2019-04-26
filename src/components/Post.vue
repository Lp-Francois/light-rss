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

<style>
.post p {
	margin-bottom: 0;
}

.post .i-date {
	font-size: .6rem;
}

.title-link, .title-link:hover {
	color: var(--font-color)!important;
}
</style>
