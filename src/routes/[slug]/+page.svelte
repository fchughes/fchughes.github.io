<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1 class="title">{data.meta.title}</h1>
		<p>{formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		background-color: #000000d6;
	}

	/* h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	} */

	.title {
		display: inline-block;
		font-size: var(--font-size-fluid-2);
		line-height: 0;
		text-transform: uppercase;
		/* font-style:italic; */
	}

	.title::first-letter {
		/* font-family: 'Astloch';
		color:#c06225; */
		/* font-size: 64px;
		font-weight: 700; */
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
