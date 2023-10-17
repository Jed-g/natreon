<script lang="ts">
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import HomeFirstSlide from '$lib/components/landing/home/FirstSlide.svelte';
	import FeaturesFirstSlide from '$lib/components/landing/features/FirstSlide.svelte';
	import FeaturesSecondSlide from '$lib/components/landing/features/SecondSlide.svelte';
	import PricingFirstSlide from '$lib/components/landing/pricing/FirstSlide.svelte';
	import AboutUsFirstSlide from '$lib/components/landing/about/FirstSlide.svelte';

	let showCircle = false;
	let circle: HTMLDivElement;
	let cursorPosition = { x: 0, y: 0 };

	const updateCursorPosition = (e: MouseEvent) => {
		[cursorPosition.x, cursorPosition.y] = [e.clientX, e.clientY];
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="grow"
	on:mouseenter={() => (showCircle = true)}
	on:mouseleave={() => (showCircle = false)}
	on:mousemove={updateCursorPosition}
>
	<Fullpage>
		<FullpageSection disableCentering title="Home">
			<HomeFirstSlide />
		</FullpageSection>
		<FullpageSection disableCentering title="Features">
			<FullpageSlide disableCentering title="Features Slide 1">
				<FeaturesFirstSlide />
			</FullpageSlide>
			<FullpageSlide disableCentering title="Features Slide 2">
				<FeaturesSecondSlide />
			</FullpageSlide>
		</FullpageSection>
		<FullpageSection disableCentering title="Pricing">
			<PricingFirstSlide />
		</FullpageSection>
		<FullpageSection disableCentering title="About Us">
			<AboutUsFirstSlide />
		</FullpageSection>
	</Fullpage>
</div>
{#if showCircle}
	<div
		class="rounded-full h-14 w-14 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none circle"
		bind:this={circle}
		style={`translate: ${cursorPosition.x}px ${cursorPosition.y}px`}
	/>
{/if}

<style>
	.circle {
		background-image: radial-gradient(rgba(30, 184, 84, 0.5) 0%, transparent 60%);
		backdrop-filter: blur(2px);
	}
</style>
