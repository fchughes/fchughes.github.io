<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	import { onMount } from 'svelte'
	let { data } = $props()

	// onMount(async () => {
	// 	const realGlass = new RealGlass()
	// 	// The init call screenshots the page and sets up listeners for resize
	// 	await realGlass.init()
	// 	const glass_element = document.getElementById('glass_card');
	// 	// const glass_element = document.querySelector('body');

	// 	console.log("GLASS EL: ", glass_element);
	// 	await realGlass.apply(glass_element, {
	// 		// frosting: 0.1,
	// 		// borderRadius: 10,
	// 		// lightStrength: 0,
	// 		// lightX: .5,
	// 		// lightY: .5,
	// 		// edgeSmoothness: 0,
	// 		// ior: 3
	// 		// ... and many more options
	// 	})
	// })
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
