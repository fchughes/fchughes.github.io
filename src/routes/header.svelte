<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'
</script>

<nav id="nav_header">
	<!-- <a href="/" class="title">
		<b>{config.title}</b>
	</a> -->

	<ul class="links">
		<li>
			<a href="/" class="title">
				<b>{config.title}</b>
			</a>
		</li>
		<li>
			<a href="/contact">Who</a>
		</li>
		<li>
			<a href="/about">What</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

	<!-- <Toggle /> -->
</nav>

<style>
	nav {
		/* padding-block: var(--size-7); */
		/* justify-self:center; */
		width: 100vw;
		justify-items: center;
		justify-content: center;
		display: flex;
	}

	.links {
		margin-block: var(--size-7);
		display: flex;
		justify-items: center;
		gap: 3rem;
		flex-wrap: wrap;
		overflow-wrap: anywhere;
		display: flex;
		row-gap:1rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

</style>
