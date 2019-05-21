<template>
	<div class="rss columns">
		<div v-show="loading" class="column col-12 centered loading loading-lg"></div>
		
		<div class="column col-12" v-for="post in sortedPosts" >
			<Post 
			:postUrl=post.postUrl 
			:title=post.title
			:from=post.from
			:description=post.description
			:pubDate=post.pubDate
			/>
		</div>
	</div>
</template>

<script>
import Post from './Post'
import feeds from '../../feeds.json'

export default {
	name: 'Rss',
	components: {
		Post
	},
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
			return fetch(url)
			.then((response) => {
				return response.text()
			})
			.then((data) => {
				const doc = new DOMParser().parseFromString(data, "application/xml");

				const from = doc.querySelector('title').textContent

				doc.querySelectorAll('item').forEach((item) => {
					let url = item.querySelector('link').textContent
					const test = url.indexOf('?') > -1 ? console.log('get') : console.log('')
					url = url.indexOf('?') > -1 ? url.split('?')[0] : url

					return this.posts.push({
						title: item.querySelector('title').textContent,
						from: from,
						postUrl: url,
						description: item.querySelector('description').textContent.replace(/<img[^>]*>/g,"").replace(/h[0-9]/g, "span"),
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
</style>