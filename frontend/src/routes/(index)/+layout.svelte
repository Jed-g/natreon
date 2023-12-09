<script lang="ts">
	import '$lib/global.css';
	import { authenticated } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import HeaderDesktop from '$lib/components/landing/header/HeaderDesktop.svelte';
	import HeaderMobile from '$lib/components/landing/header/HeaderMobile.svelte';
	import { scale } from 'svelte/transition';
	import UserType from '$lib/enums/userType';

	const timeOnPageMountInMs = Date.now();
	let timeSpentInMs = 0;
	let interval: NodeJS.Timeout;

	onMount(async () => {
		await authenticated.verify();

		// Register new visit if time spent is above 5 seconds
		await new Promise((resolve) => setTimeout(resolve, 5000));
		const response = await fetch('/api/stats/landing/register-new-page-visit');
		if (!response.ok) {
			const response = await fetch('https://api.ipify.org?format=json');
			const data = await response.json();
			const ip = data.ip;

			if (!response.ok) return;

			const secondResponse = await fetch(
				'/api/stats/landing/register-new-page-visit-with-ip-param',
				{
					method: 'POST',
					body: JSON.stringify({ ip }),
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);

			if (!secondResponse.ok) return;
		}

		interval = setInterval(async () => {
			timeSpentInMs = Date.now() - timeOnPageMountInMs;

			const response = await fetch('/api/stats/landing/update-page-visit', {
				method: 'POST',
				body: JSON.stringify({ time_spent_seconds: Math.floor(timeSpentInMs / 1000) }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				clearInterval(interval);
			}
		}, 1000);
	});

	onDestroy(() => clearInterval(interval));

	$: loading = $authenticated === null;
	$: {
		switch ($authenticated) {
			case UserType.CUSTOMER:
				window.location.href = '/app';
				break;
			case UserType.ADMIN:
				window.location.href = '/admin';
				break;
			case UserType.REPORTER:
				window.location.href = '/metrics';
				break;
			default:
				break;
		}
	}
</script>

<svelte:head>
	<title>Natreon&#8482;</title>
</svelte:head>

<main class="h-screen w-screen full-dynamic-viewport-height full-dynamic-viewport-width flex">
	{#if loading}
		<div class="grow flex items-center justify-center">
			<span class="loading loading-ring loading-lg" />
		</div>
	{:else}
		<div
			class="flex flex-col grow overflow-x-hidden relative"
			in:scale={{ start: 0.9, duration: 500, opacity: 0 }}
		>
			<HeaderDesktop />
			<HeaderMobile />
			<div class="height flex flex-col">
				<slot />
			</div>
		</div>
	{/if}
</main>

<style>
	.height {
		height: calc(100% - 64px);
		margin-top: 64px;
	}

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
