<script lang="ts">
	import LocationsGlobe from './landing-page/LocationsGlobe.svelte';
	import VisitDetails from './landing-page/VisitDetails.svelte';
</script>

<div class="relative grow m-6">
	<div class="card h-full w-full flex bg-base-100 shadow-xl p-6 overflow-y-auto">
		<div class="flex"><h1 class="text-2xl">Overview</h1></div>
		<div class="divider my-2" />
		<div class="flex flex-col">
			<div class="flex" />
			<div class="flex my-4">
				<div class="h-96 grow relative"><LocationsGlobe /></div>
			</div>
			<div class="flex">
				<div class="h-96 grow relative"><VisitDetails /></div>
			</div>
		</div>
	</div>
</div>
