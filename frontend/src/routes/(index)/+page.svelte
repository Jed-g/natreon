<script lang="ts">
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import HomeSlide from '$lib/components/landing/home/Slide.svelte';
	import SolutionDesktopSlide from '$lib/components/landing/solution/DesktopSlide.svelte';
	import SolutionMobileSlide from '$lib/components/landing/solution/MobileSlide.svelte';
	import FeaturesDesktopSlide from '$lib/components/landing/features/DesktopSlide.svelte';
	import FeaturesMobileSlide from '$lib/components/landing/features/MobileSlide.svelte';
	import PricingDesktopSlide from '$lib/components/landing/pricing/DesktopSlide.svelte';
	import PricingMobileSlide from '$lib/components/landing/pricing/MobileSlide.svelte';
	import SignupDesktopSlide from '$lib/components/landing/signup/DesktopSlide.svelte';
	import SignupMobileSlide from '$lib/components/landing/signup/MobileSlide.svelte';

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
		class="flex grow"
		on:mouseenter={() => (showCircle = !isMobileDevice)}
		on:mouseleave={() => (showCircle = false)}
		on:mousemove={updateCursorPosition}
		bind:this={container}
	>
		<!-- Mobile Slides -->
		<div class="grow relative sm:hidden">
			<Fullpage>
				<FullpageSection disableCentering title="Home">
					<HomeSlide />
				</FullpageSection>
				<FullpageSection disableCentering title="Solution">
					<SolutionMobileSlide />
				</FullpageSection>
				<FullpageSection disableCentering title="Features">
					<FeaturesMobileSlide />
				</FullpageSection>
				<FullpageSection disableCentering title="Pricing">
					<PricingMobileSlide />
				</FullpageSection>
				<FullpageSection disableCentering title="Signup">
					<SignupMobileSlide />
				</FullpageSection>
			</Fullpage>
		</div>
		<!-- Desktop Slides -->
		<div class="grow relative hidden sm:block">
			<Fullpage>
				<FullpageSection disableCentering title="Home">
					<HomeSlide />
				</FullpageSection>
				<FullpageSection disableCentering title="Solution">
					<SolutionDesktopSlide />
				</FullpageSection>
				<FullpageSection disableCentering title="Features">
					<FeaturesDesktopSlide />
				</FullpageSection>
				<FullpageSection disableCentering title="Pricing">
					<PricingDesktopSlide />
				</FullpageSection>
				<FullpageSection disableCentering title="Signup">
					<SignupDesktopSlide />
				</FullpageSection>
			</Fullpage>
		</div>
	</div>
	{#if showCircle}
		<div
			class="rounded-full h-8 w-8 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert"
			bind:this={circle}
			style={`translate: ${cursorPosition.x}px ${cursorPosition.y}px`}
		/>
	{/if}
</div>
