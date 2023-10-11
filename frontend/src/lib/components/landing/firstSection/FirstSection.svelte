<script lang="ts">
	import AnimatedBusinessName from '$lib/components/landing/firstSection/AnimatedBusinessName.svelte';
	import nature from '$lib/assets/nature.jpg';
</script>

<div class="flex flex-col h-full items-center justify-center relative">
	<img class="absolute object-cover first-section-img" src={nature} alt="Nature" />
	<AnimatedBusinessName />
</div>

<style>
	:global(.first-section-img) {
		height: 100%;
		width: 100%;
		opacity: 60%;
		/* translate: -50% calc(-50% + 16px); */
	}
</style>
