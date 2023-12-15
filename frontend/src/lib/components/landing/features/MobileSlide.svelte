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
				goto('#feature2');
				break;
			case 2:
				goto('#feature3');
				break;
			default:
				goto('#feature1');
				break;
		}
	};

	function next() {
		currentIndex = (currentIndex + 1) % 3;
		goToSlide(currentIndex);
	}

	function prev() {
		currentIndex = (currentIndex - 1 + 3) % 3;
		goToSlide(currentIndex);
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

	<div class="w-full sm:w-5/6 p-4">
		<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-4 text-grey text-center">
			What's it all about?
		</h2>
		<p class="text-lg text-white text-center mb-4">
			Natreon helps you to find green spaces, discover local points of interest, get involved with a great community and more!
		</p>
	</div>


        <div class="carousel-container flex flex-col items-center justify-center mt-4">
			<div class="left-button-container">
				<button
				on:click={(e) => !e.isTrusted && prev()}
				on:click|trusted={() => {
					stopAutoScroll();
					prev();
				}}
				class="nav-button">←</button
				>
			</div>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="w-5/6 carousel rounded-box relative"
                on:mouseenter={stopAutoScroll}
                on:mouseleave={startAutoScroll}
            >
                <div id="feature1" class="carousel-item w-full">
                    <img src={MapFeatureImg} alt="Interactive Map!" />
                </div>
                <div id="feature2" class="carousel-item w-full">
                    <img src={POIFeatureImg} alt="Points of interest!" />
                </div>
                <div id="feature3" class="carousel-item w-full">
                    <img src={SocialFeatureImg} alt="Social Features!" />
                </div>
            </div>
			<div class="right-button-container">
				<button
				on:click={(e) => !e.isTrusted && next()}
				on:click|trusted={() => {
					stopAutoScroll();
					next();
				}}
				class="nav-button">→</button
				>
			</div>
        </div>
		<div id="feature-description" class="mt-10 mx-10 text-lg font-bold text-center">{description[currentIndex]}</div>
    </div>
</IntersectionObserver>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}
	.carousel-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}

	.nav-button {
		font-size: 2rem;
		color: white;
		background-color: rgba(0, 0, 0, 0.5);
		border: none;
		border-radius: 50%;
		width: 35px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.nav-button:hover {
		background-color: rgba(0, 0, 0, 0.7);
	}

	.left-button-container,
    .right-button-container {
        position: absolute;
        top: 50%;
        display: flex;
        align-items: center;
    }

    .left-button-container {
        left: 0;
    }

    .right-button-container {
        right: 0;
    }
</style>