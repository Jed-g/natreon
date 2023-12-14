<script lang="ts">
	import MapFeatureImg from '$lib/components/landing/features/map-feature.png';
	import POIFeatureImg from '$lib/components/landing/features/poi-feature.png';
	import SocialFeatureImg from '$lib/components/landing/features/social-feature.png';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { MINIMUM_TIME_ON_SLIDE_FOR_PATH_REGISTRATION_MS } from '$lib/config';
	import { pathToRegistrationAppend } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';

	let timeout: ReturnType<typeof setTimeout>;

	$: {
		if (intersecting) {
			timeout = setTimeout(() => {
				if (intersecting) {
					pathToRegistrationAppend('/features');
				}
			}, MINIMUM_TIME_ON_SLIDE_FOR_PATH_REGISTRATION_MS);
		} else {
			clearTimeout(timeout);
		}
	}

	let element: HTMLDivElement;
	let intersecting: boolean;

	let carousel: HTMLDivElement;
	let currentIndex = 0;
	let interval: any;

	const description = [
		"Be guided by the interactive map to your new favourite chill out spot! 🧘‍♀️",
		"Learn more about your local environment with hand-curated Points of Interest! 🗿",
		"Share your favourite spots, plan events and see what's happening in your area with Natreon-𝕏. 🫶"
	]

	function next() {
		currentIndex = (currentIndex + 1) % 3;
		console.log('CLICK-NEXT', currentIndex);
	}

	function prev() {
		currentIndex = (currentIndex - 1 + 3) % 3;
		console.log('CLICK-PREV', currentIndex);
	}

	function startAutoScroll() {
		interval = setInterval(() => {
			next();
		}, 5000);
	}

	function stopAutoScroll() {
		clearInterval(interval);
	}

	onMount(() => {
		startAutoScroll();
	});

	onDestroy(() => {
		stopAutoScroll();
	});
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.1}>
	<div
		class="flex flex-col h-full items-center relative select-none background-image"
		id="home"
		bind:this={element}
	>
		<div class="carousel-container">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="w-5/6 carousel rounded-box"
				bind:this={carousel}
				on:mouseenter={stopAutoScroll}
				on:mouseleave={startAutoScroll}
			>
				<div class="carousel-item w-full">
					<img src={MapFeatureImg} alt="Interactive Map!" />
				</div>
				<div class="carousel-item w-full">
					<img src={POIFeatureImg} alt="Points of interest!" />
				</div>
				<div class="carousel-item w-full">
					<img src={SocialFeatureImg} alt="Social Features!" />
				</div>
			</div>
			<div id="feature-description" class="mt-4 text-lg font-bold">{description[currentIndex]}</div>
			<button on:click={prev} class="nav-button nav-button-left">←</button>
			<button on:click={next} class="nav-button nav-button-right">→</button>
		</div>
	</div>
</IntersectionObserver>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}
</style>
