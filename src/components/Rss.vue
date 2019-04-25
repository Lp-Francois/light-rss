<template>
	<div class="rss columns">
		<div v-show="loading" class="column col-12 centered loading loading-lg"></div>
		<div v-for="post in sortedPosts" class="column col-12">
			
			<div class="post">
				<a class="title-link" :href="post.postUrl" target="_blank">
					<strong>{{ post.title }}</strong>
				</a>
				<i> ({{ post.from }})</i>
				<br>
				<i class="i-date">{{ post.pubDate }}</i>
				<br>
				<p v-html="post.description"></p>
				<a :href="post.postUrl" target="_blank">Read more</a>
			</div>	
		</div>
	</div>
</template>

<script>
import feeds from '../../feeds.json'

export default {
	name: 'Rss',
	data() {
		return {
			proxyUrl: 'https://cors-anywhere.herokuapp.com/',
			urlFeedList: feeds.urls,
			posts: [],
			loading: true,
		}
	},
	created: function() {
		this.urlFeedList.forEach((url)=>{
			this.rssFetch(this.proxyUrl+url)
		})
	},
	computed: {
	    sortedPosts: function() {
	        this.posts.sort( ( a, b) => {
	            return new Date(b.pubDate) - new Date(a.pubDate);
	        });
	        return this.posts;
	    }
	},
	methods: {
		rssFetch: function (url) {
			fetch(url)
			.then((response) => {
				return response.text()
			})
			.then((data) => {
				const doc = new DOMParser().parseFromString(data, "application/xml");

				const from = doc.querySelector('title').textContent

				doc.querySelectorAll('item').forEach((item) => {
					return this.posts.push({
				        title: item.querySelector('title').textContent,
				        from: from,
				        postUrl: item.querySelector('link').textContent,
				        description: item.querySelector('description').textContent,
				        pubDate: item.querySelector('pubDate').textContent,
			      	})
				})
			})
			.then(()=>(this.loading = false))
		},
	},
}
</script>

<style>
.card {
	border: 0;
	background-color: var(--secondary-bg-color);
	box-shadow: 0 .25rem 1rem rgba(48,55,66,.15);
	height: 100%;
}

.column {
	padding: .4rem;
}

.loading {
	margin-top: 30px;
}

.pt-O {
	padding-top: 0;
}

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
