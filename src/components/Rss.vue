<template>
	<div class="rss">
		<div v-for="post in posts" class="card">
			<h2>{{ post.title }}</h2>
			<div v-html="post.description"></div>
			<a :href="post.url">{{ post.url }}</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Rss',
	data() {
		return {
			data: {
				title: 'Loading',
				url :'',
			},
			proxyUrl: 'https://cors-anywhere.herokuapp.com/',
			urlFeedList: [
				'https://korben.info/feed',
				'https://hacks.mozilla.org/feed',
			],
			posts: [
				{
					
				}
			]
		}
	},
	created: function() {
		//get JSON with URLs feed

		//loop through each URL

			//rssFetch
		this.rssFetch(this.proxyUrl+'https://korben.info/feed')
	},
	methods: {
		rssFetch: function (url) {
			fetch(url)
			.then((response) => {
				return response.text()
			})
			.then((data) => {
				const doc = new DOMParser().parseFromString(data, "application/xml");

				this.data.title = doc.getElementsByTagName('description')[0].textContent
				this.data.url = doc.getElementsByTagName('link')[0].textContent

				doc.querySelectorAll('item').forEach((item) => {
					return this.posts.push({
				        title: item.querySelector('title').textContent,
				        description: item.querySelector('description').textContent,
				        url: item.querySelector('link').textContent,
			      	})
				})
			})
			.catch(error => console.error(error))
		},
	},
}
</script>

<style scoped>
.rss {height: 100vh;}
</style>
