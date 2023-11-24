<script lang="ts">
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import HomeFirstSlide from '$lib/components/landing/home/FirstSlide.svelte';
	import FeaturesFirstSlide from '$lib/components/landing/features/FirstSlide.svelte';
	import FeaturesSecondSlide from '$lib/components/landing/features/SecondSlide.svelte';
	import PricingFirstSlide from '$lib/components/landing/pricing/FirstSlide.svelte';
	import SolutionFirstSlide from '$lib/components/landing/solution/FirstSlide.svelte';
	import SignupFirstSlide from '$lib/components/landing/signup/FirstSlide.svelte';

	let isMobileDevice = false;
	let showCircle = false;
	let circle: HTMLDivElement;
	let container: HTMLDivElement;
	let cursorPosition = { x: 0, y: 0 };

	const updateCursorPosition = (e: MouseEvent) => {
		const [offsetX, offsetY] = [
			container.getBoundingClientRect().left,
			container.getBoundingClientRect().top
		];
		[cursorPosition.x, cursorPosition.y] = [e.x - offsetX, e.y - offsetY];
	};
</script>

<svelte:window on:touchstart={() => (isMobileDevice = true)} />

<div class="overflow-hidden grow flex relative">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="grow"
		on:mouseenter={() => (showCircle = !isMobileDevice)}
		on:mouseleave={() => (showCircle = false)}
		on:mousemove={updateCursorPosition}
		bind:this={container}
	>
		<Fullpage>
			<FullpageSection disableCentering title="Home">
				<HomeFirstSlide />
			</FullpageSection>
			<FullpageSection disableCentering title="Solution">
				<SolutionFirstSlide />
			</FullpageSection>
			<FullpageSection disableCentering title="Features">
				<FeaturesFirstSlide />
			</FullpageSection>
			<FullpageSection disableCentering title="Pricing">
				<PricingFirstSlide />
			</FullpageSection>
			<FullpageSection disableCentering title="Signup">
				<SignupFirstSlide />
			</FullpageSection>
		</Fullpage>
	</div>
	{#if showCircle}
		<div
			class="rounded-full h-8 w-8 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert"
			bind:this={circle}
			style={`translate: ${cursorPosition.x}px ${cursorPosition.y}px`}
		/>
	{/if}
</div>
