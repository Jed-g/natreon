<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Heart } from 'lucide-svelte';
	import FacetedPoiFilter from '$lib/components/app/main/home/map/search-bar/faceted-poi-filter/FacetedPOIFilter.svelte';
	import poiCategories from '$lib/components/app/main/home/map/search-bar/faceted-poi-filter/options';
	import type layers from '$lib/components/app/main/home/map/search-bar/layers';
	import LayerToggle from '$lib/components/app/main/home/map/search-bar/LayerToggle.svelte';

	export let selectedMapLayer: (typeof layers)[0];

	let poiCategoriesFilter: string[] = [];
	let onlyShowFavourites = false;
</script>

<div class="flex gap-2 max-sm:flex-wrap w-full">
	<Input
		placeholder="Search by name/location..."
		class="w-full sm:max-w-md bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground"
	/>
	<div class="flex justify-between gap-2 grow">
		<div class="flex gap-2">
			<FacetedPoiFilter
				title="Category"
				bind:filterValues={poiCategoriesFilter}
				options={poiCategories}
			/>
			<Toggle
				class="data-[state=off]:bg-background data-[state=on]:bg-primary"
				bind:pressed={onlyShowFavourites}><Heart /></Toggle
			>
		</div>
		<LayerToggle bind:selectedMapLayer />
	</div>
</div>
