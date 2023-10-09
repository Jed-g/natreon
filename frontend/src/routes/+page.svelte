<script lang="ts">
	import { devModeUrlFix } from '$lib/utils';
	import { onMount } from 'svelte';

	let loading = true;
	let apiResponse: unknown = null;

	onMount(async () => {
		const response = await fetch(devModeUrlFix('/api'));
		const data = await response.json();
		apiResponse = JSON.stringify(data);
		loading = false;
	});
</script>

<div class="flex flex-col grow items-center justify-center">
	{#if loading}
		<span class="loading loading-ring loading-lg" />
	{:else}
		<h1 class="text-2xl">Welcome</h1>
		<p>Request to backend server was made on page mount.</p>
		<h2 class="text-lg mt-4">Details:</h2>
		<p>GET request to route "/api" responded with: {apiResponse}</p>
	{/if}
</div>
