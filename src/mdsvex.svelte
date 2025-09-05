<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<script module lang="ts">
	import { img } from '$lib/components/custom'
	export { img }
</script>

{@render children?.()}
