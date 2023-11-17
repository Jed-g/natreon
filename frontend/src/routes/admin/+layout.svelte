<script lang="ts">
	import '$lib/global.css';
	import { authenticated } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import UserType from '$lib/enums/userType';

	onMount(() => authenticated.verify());

	$: loading = $authenticated === null;
	$: {
		switch ($authenticated) {
			case false:
				goto('/login');
				break;
			case UserType.CUSTOMER:
				goto('/app');
				break;
			case UserType.REPORTER:
				goto('/metrics');
				break;
			default:
				break;
		}
	}
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<main class="h-screen w-screen full-dynamic-viewport-height full-dynamic-viewport-width flex">
	{#if loading}
		<div class="grow flex items-center justify-center">
			<span class="loading loading-ring loading-lg" />
		</div>
	{:else}
		<div class="grow overflow-hidden" in:scale={{ start: 0.9, duration: 500, opacity: 0 }}>
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
