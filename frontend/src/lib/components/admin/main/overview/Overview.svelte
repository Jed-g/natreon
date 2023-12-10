<script lang="ts">
	import LocationsGlobe from './LocationsGlobe.svelte';
</script>

<div class="relative grow m-6">
	<div class="card h-full w-full flex bg-base-100 shadow-xl p-6">
		<div class="flex"><h1 class="text-2xl">Overview</h1></div>
		<div class="divider my-2" />
		<div class="flex flex-col">
			<div class="flex" />
			<div class="flex">
				<div class="h-96 grow relative"><LocationsGlobe /></div>
			</div>
		</div>
	</div>
</div>
