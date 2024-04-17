<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Heart } from 'lucide-svelte';
	import FacetedPoiFilter from '$lib/components/app/main/home/map/search-bar/faceted-poi-filter/FacetedPOIFilter.svelte';
	import poiCategories from '$lib/components/app/main/home/map/search-bar/faceted-poi-filter/options';
	import type layers from '$lib/components/app/main/home/map/search-bar/layers';
	import LayerToggle from '$lib/components/app/main/home/map/search-bar/LayerToggle.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';

	export let selectedMapLayer: (typeof layers)[0];

	let poiCategoriesFilter: string[] = [];
	let onlyShowFavourites = false;

	let hoverCardsOpened = [false, false, false, false];

	const closeAllHoverCards = () => {
		hoverCardsOpened = new Array(hoverCardsOpened.length).fill(false);
	};
</script>

<div class="flex gap-2 max-sm:flex-wrap w-full">
	<HoverCard.Root
		bind:open={hoverCardsOpened[0]}
		openDelay={0}
		closeDelay={0}
		onOutsideClick={(e) => {
			closeAllHoverCards();
			e.target.focus();
		}}
	>
		<HoverCard.Trigger>
			<Input
				id="name-location-search"
				placeholder="Search by name/location..."
				class="w-full sm:max-w-md bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground"
			/>
		</HoverCard.Trigger>
		<HoverCard.Content class="w-fit h-fit py-2 px-2.5">
			<div class="text-xs flex items-center">Search By POI Name Or Location</div>
		</HoverCard.Content>
	</HoverCard.Root>
	<div class="flex justify-between gap-2 grow">
		<div class="flex gap-2">
			<HoverCard.Root
				bind:open={hoverCardsOpened[1]}
				openDelay={0}
				closeDelay={0}
				onOutsideClick={(e) => {
					closeAllHoverCards();
					e.target.focus();
				}}
			>
				<HoverCard.Trigger>
					<FacetedPoiFilter
						title="Category"
						bind:filterValues={poiCategoriesFilter}
						options={poiCategories}
					/>
				</HoverCard.Trigger>
				<HoverCard.Content class="w-fit h-fit py-2 px-2.5">
					<div class="text-xs flex items-center">Filter By POI Category</div>
				</HoverCard.Content>
			</HoverCard.Root>
			<HoverCard.Root
				bind:open={hoverCardsOpened[2]}
				openDelay={0}
				closeDelay={0}
				onOutsideClick={(e) => {
					closeAllHoverCards();
					e.target.focus();
				}}
			>
				<HoverCard.Trigger>
					<Toggle
						class="data-[state=off]:bg-background data-[state=on]:bg-primary"
						bind:pressed={onlyShowFavourites}><Heart /></Toggle
					>
				</HoverCard.Trigger>
				<HoverCard.Content class="w-fit h-fit py-2 px-2.5">
					<div class="text-xs flex items-center">Show Favourites Only</div>
				</HoverCard.Content>
			</HoverCard.Root>
		</div>
		<HoverCard.Root
			bind:open={hoverCardsOpened[3]}
			openDelay={0}
			closeDelay={0}
			onOutsideClick={(e) => {
				closeAllHoverCards();
				e.target.focus();
			}}
		>
			<HoverCard.Trigger>
				<LayerToggle bind:selectedMapLayer />
			</HoverCard.Trigger>
			<HoverCard.Content class="w-fit h-fit py-2 px-2.5">
				<div class="text-xs flex items-center">Change Map Layer</div>
			</HoverCard.Content>
		</HoverCard.Root>
	</div>
</div>
