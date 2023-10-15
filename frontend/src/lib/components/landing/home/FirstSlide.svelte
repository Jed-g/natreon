<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import AnimatedBusinessName from '$lib/components/landing/home/AnimatedBusinessName.svelte';
	import AnimatedLogo from './AnimatedLogo.svelte';

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
			<figure
				class="max-w-screen-md text-center relative mx-8"
				in:fly={{ duration: 1600, delay: 400, y: 200, opacity: 0, easing: cubicOut }}
			>
				<svg
					class="h-6 mx-auto mb-3 text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 18 14"
				>
					<path
						d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
					/>
				</svg>
				<blockquote>
					<p class="sm:text-lg text-sm italic font-medium text-white">
						"Before discovering Natreon&#8482; I was depressed and miserable, now I am the happiest
						person on planet earth..."
					</p>
				</blockquote>
				<figcaption class="flex items-center justify-center mt-6 space-x-3 sm:text-base text-sm">
					<div class="flex items-center divide-x-2 divide-white">
						<cite class="pr-3 font-medium text-white">Some random guy</cite>
						<cite class="pl-3 text-sm">CEO at a company</cite>
					</div>
				</figcaption>
			</figure>
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
