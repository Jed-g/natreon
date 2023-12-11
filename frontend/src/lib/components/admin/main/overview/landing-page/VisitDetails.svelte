<script lang="ts">
	import { onMount } from 'svelte';
	import Plot3D from './visitdetails/Plot3D.svelte';

	let showUnique = false;

	let loading = true;
	let totalVisits: [string, string, number][];
	let uniqueVisits: [string, string, number][];

	const formatDate = (dateParam: string) => {
		const date = new Date(dateParam);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();

		const formattedDate = `${day}/${month}/${year}`;
		return formattedDate;
	};

	onMount(async () => {
		const response = await fetch('/api/admin/stats/all-visits');
		if (!response.ok) return;
		const data = await response.json();

		const total = data.all;
		const unique = data.unique;

		totalVisits = total.map((visit: [string, string, number, boolean]) => [
			visit[0],
			formatDate(visit[1]),
			visit[2],
			visit[3]
		]);
		uniqueVisits = unique.map((visit: [string, string, number, boolean]) => [
			visit[0],
			formatDate(visit[1]),
			visit[2],
			visit[3]
		]);

		loading = false;
	});
</script>

<div class="w-full h-full relative card overflow-hidden bg-base-300">
	<div class="flex justify-between items-center p-4">
		<p>Landing Page Visits</p>
		<div>
			<select
				class="select select-sm max-sm:select-xs select-info w-full max-w-xs"
				bind:value={showUnique}
			>
				<option value={false}>All Visits</option>
				<option value={true}>Unique Visits</option>
			</select>
		</div>
	</div>

	<div class="flex grow">
		{#if loading}
			<div class="grow flex items-center justify-center">
				<span class="loading loading-ring loading-lg" />
			</div>
		{:else}
			<Plot3D data={showUnique ? uniqueVisits : totalVisits} />
		{/if}
	</div>
</div>
