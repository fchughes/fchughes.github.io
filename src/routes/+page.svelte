<script lang="ts">
	import * as config from '$lib/config'
	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.title {
		display: inline-block;
		font-size: var(--font-size-fluid-2);
		line-height: 0;
		white-space: nowrap;
		text-shadow: #4e4691 1px 0 10px;
		/* font-style: italic; */
		text-transform: uppercase;
	}
	/* 
	.title::first-letter {
		font-family: 'Astloch';
		color: #c06225;
		font-size: 64px;
		font-weight: 700;
	} */

	.date {
		color: var(--text-2);
		font-size: small;
		line-height: 1;
	}

	.description {
		margin-top: var(--size-3);
	}

	a:visited {
		color: #a35959;
	}

	a:hover {
		text-decoration: none;
	}
</style>
