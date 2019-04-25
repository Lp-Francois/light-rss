<template>
	<div class="rss columns">
		<div class="column pt-0">
			<div class="hero hero-sm bg-dark">
				<div class="hero-body">
					<h2>Feed names</h2>
					<ul v-for="name in feedNames">
						<li>{{ name }}</li>
					</ul>
				</div>
			</div>
		</div>

		<div v-show="loading" class="column col-12 centered loading loading-lg"></div>
		<div v-for="post in sortedPosts" class="column col-12">
			<div class="card">
						
				<div class="card-body">
					<h3>{{ post.title }}</h3>
					<i>{{post.pubDate}}</i>
					<div v-html="post.description"></div>
					<a :href="post.url" target="_blank">Read more</a>
				</div>
				
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
			feedNames: []
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

				this.feedNames.push(doc.querySelector('title').textContent)

				doc.querySelectorAll('item').forEach((item) => {
					return this.posts.push({
				        title: item.querySelector('title').textContent,
				        description: item.querySelector('description').textContent,
				        url: item.querySelector('link').textContent,
				        pubDate: item.querySelector('pubDate').textContent,
			      	})
				})
			})
			.then(()=>(this.loading = false))
		},
	},
}
</script>

<style scoped>
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
</style>
