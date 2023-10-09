<script lang="ts">
	import '$lib/global.css';
</script>

<main class="full-dynamic-viewport-height full-dynamic-viewport-width h-full flex flex-col">
	<slot />
</main>

<style>
	@supports (height: 100dvh) {
		.full-dynamic-viewport-height {
			height: 100dvh;
		}
	}

	@supports (width: 100dvw) {
		.full-dynamic-viewport-width {
			width: 100dvw;
		}
	}
</style>
