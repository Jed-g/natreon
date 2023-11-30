<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AnimatedBusinessName from '$lib/components/landing/home/AnimatedBusinessName.svelte';
	import AnimatedLogo from './AnimatedLogo.svelte';
	import Testimonials from './Testimonials.svelte';

	let element: HTMLDivElement;
	let intersecting: boolean;
	$: mounted = intersecting;
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.1}>
	<div
		class="flex flex-col h-full items-center justify-center relative select-none background-image"
		id="home"
		bind:this={element}
	>
		<div class="relative -mt-24">
			<AnimatedLogo
				height={400}
				strokeColour1="#2c9296"
				strokeColour2="#fa7443"
				duration={4500}
				strokeWidthHeightProportion={0.025}
				{mounted}
			/>
		</div>
		{#if mounted}
			<div class="relative -mt-4 mb-12" in:fade={{ duration: 1600, delay: 200, easing: cubicOut }}>
				<AnimatedBusinessName />
			</div>
			<Testimonials />
		{/if}
	</div>
</IntersectionObserver>

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
