<script lang="ts">
	import Problem from './problem copy.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { MINIMUM_TIME_ON_SLIDE_FOR_PATH_REGISTRATION_MS } from '$lib/config';
	import { pathToRegistrationAppend } from '$lib/utils';

	let timeout: ReturnType<typeof setTimeout>;

	$: {
		if (intersecting) {
			timeout = setTimeout(() => {
				if (intersecting) {
					pathToRegistrationAppend('/solution');
				}
			}, MINIMUM_TIME_ON_SLIDE_FOR_PATH_REGISTRATION_MS);
		} else {
			clearTimeout(timeout);
		}
	}

	let element: HTMLDivElement;
	let intersecting: boolean;
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.1}>
	<div
		class="flex flex-col h-full items-center justify-center relative select-none background-image"
		id="home"
		bind:this={element}
	>
		<Problem />
	</div>
</IntersectionObserver>

<style>
    .background-image {
        position: relative;
    }

    .background-image::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url('/nature.jpg');
        background-size: cover;
        opacity: 0.5; 
    }
</style>
