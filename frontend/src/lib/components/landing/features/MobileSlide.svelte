<script lang="ts">
	import MapFeatureImg from '$lib/components/landing/features/map-feature.png';
	import POIFeatureImg from '$lib/components/landing/features/poi-feature.png';
	import SocialFeatureImg from '$lib/components/landing/features/social-feature.png';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { MINIMUM_TIME_ON_SLIDE_FOR_PATH_REGISTRATION_MS } from '$lib/config';
	import { pathToRegistrationAppend } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';
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
		'Be guided by the interactive map to your new favourite chill out spot! 🧘‍♀️',
		'Learn more about your local environment with hand-curated Points of Interest! 🗿',
		"Share your favourite spots, plan events and see what's happening in your area with Natreon-𝕏. 🫶"
	];
	const goToSlide = (index: number) => {
		switch (index) {
			case 1:
				goto('#slide2');
				break;
			case 2:
				goto('#slide3');
				break;
			default:
				goto('#slide1');
				break;
		}
	};
	function next() {
		currentIndex = (currentIndex + 1) % 3;
		goToSlide(currentIndex);
		//console.log('CLICK-NEXT', currentIndex+1);
	}
	function prev() {
		currentIndex = (currentIndex - 1 + 3) % 3;
		goToSlide(currentIndex);
		//console.log('CLICK-PREV', currentIndex+1);
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
					<div id="slide1" class="carousel-item w-full">
						<img src={MapFeatureImg} alt="Interactive Map!" />
					</div>
					<div id="slide2" class="carousel-item w-full">
						<img src={POIFeatureImg} alt="Points of interest!" />
					</div>
					<div id="slide3" class="carousel-item w-full">
						<img src={SocialFeatureImg} alt="Social Features!" />
					</div>
				</div>
				<div id="feature-description" class="mt-4 text-lg font-bold">{description[currentIndex]}</div>
				<button
					on:click={(e) => !e.isTrusted && prev()}
					on:click|trusted={() => {
						stopAutoScroll();
						prev();
					}}
					class="nav-button nav-button-left">←</button
				>
				<button
					on:click={(e) => !e.isTrusted && next()}
					on:click|trusted={() => {
						stopAutoScroll();
						next();
					}}
					class="nav-button nav-button-right">→</button
				>
			</div>
	</div>
</IntersectionObserver>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}
	.carousel-container {
		@apply flex flex-col items-center justify-center mt-16;
	}
</style>