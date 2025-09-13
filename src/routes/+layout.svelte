<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../app.css'

	let { data, children } = $props()
</script>

<!-- <div id="layout" class="layout"> -->
	<Header />

	<main>
		<PageTransition url={data.url}>
			{@render children?.()}
		</PageTransition>
	</main>

	<!-- <Footer /> -->
<!-- </div> -->

<style>
	.layout {
		height: 100%;
		width: 100%;
		/* max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto; */
		margin-inline: 6rem;
		padding-inline: var(--size-7);
		background-color: transparent;
		/* background-image: url('/digicross.jpeg');
		background-position: top;
		filter: hue-rotate(342deg); */
	}

	/* .layout:before {
		content: '';
		background-image: url('/digicross_red.jpeg');
		background-position: top;
		filter: hue-rotate(333deg) brightness(0.8);
		height: 100vh;
		width: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
	} */

	/* main {
		padding-block: var(--size-9);
	} */

	/* @media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	} */
</style>
