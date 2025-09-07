<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	/* .posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	} */

	.title {
		display: inline-block;
		font-size: var(--font-size-fluid-2);
		line-height: 0;
	}

	.title::first-letter {
		font-family: 'Astloch';
		color:#c06225;
		font-size: 64px;
		font-weight: 700;
	}

	.date {
		color: var(--text-2);
		font-size: small;
		line-height: 1;
	}

	.description {
		margin-top: var(--size-3);
	}

	a:visited {
		color: #aea5d4;
	}

	a:hover {
		text-decoration: none;
	}
</style>
