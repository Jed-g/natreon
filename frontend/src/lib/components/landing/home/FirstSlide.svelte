<script lang="ts">
	import AnimatedBusinessName from '$lib/components/landing/home/AnimatedBusinessName.svelte';
	import AnimatedLogo from './AnimatedLogo.svelte';
</script>

<div
	class="flex flex-col h-full items-center justify-center relative select-none background-image"
	id="home"
>
	<AnimatedLogo
		height={240}
		strokeColour="#000000"
		duration={4500}
		strokeWidthHeightProportion={0.5}
	/>
	<AnimatedBusinessName />
</div>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}

	.background-image::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(2px);
	}
</style>
