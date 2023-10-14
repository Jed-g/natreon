<script lang="ts">
	import AnimatedBusinessName from '$lib/components/landing/home/AnimatedBusinessName.svelte';
	import AnimatedLogo from './AnimatedLogo.svelte';
</script>

<div
	class="flex flex-col h-full items-center justify-center relative select-none background-image"
	id="home"
>
	<AnimatedLogo
		height={400}
		strokeColour1="#2c9296"
		strokeColour2="#fa7443"
		duration={4500}
		strokeWidthHeightProportion={0.025}
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
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(2px);
	}
</style>
