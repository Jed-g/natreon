<script lang="ts">
	import '$lib/global.css';
	import { authenticated } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => authenticated.verify());

	$: loading = $authenticated === null;
	$: $authenticated === false && goto('/');
</script>

<main class="full-dynamic-viewport-height full-dynamic-viewport-width h-full flex flex-col">
	{#if loading}
		<div class="grow flex items-center justify-center">
			<span class="loading loading-ring loading-lg" />
		</div>
	{:else}
		<slot />
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
