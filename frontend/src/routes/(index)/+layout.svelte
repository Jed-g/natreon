<script lang="ts">
	import '$lib/global.css';
	import { authenticated } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import HeaderDesktop from '$lib/components/landing/header/HeaderDesktop.svelte';
	import HeaderMobile from '$lib/components/landing/header/HeaderMobile.svelte';
	import { scale } from 'svelte/transition';

	onMount(() => authenticated.verify());

	$: loading = $authenticated === null;
	$: $authenticated === true && goto('/app');
</script>

<main class="h-screen w-screen full-dynamic-viewport-height full-dynamic-viewport-width flex">
	{#if loading}
		<div class="grow flex items-center justify-center">
			<span class="loading loading-ring loading-lg" />
		</div>
	{:else}
		<div
			class="flex flex-col grow overflow-x-hidden"
			in:scale={{ start: 0.9, duration: 500, opacity: 0 }}
		>
			<HeaderDesktop />
			<HeaderMobile />
			<slot />
		</div>
	{/if}
</main>

<style>
	@supports (height: 100dvh) {
		.full-dynamic-viewport-height {
			height: 100dvh;
		}
	}

	@supports (width: 100dvw) {
		.full-dynamic-viewport-width {
			width: 100dvw;
		}
	}
</style>
