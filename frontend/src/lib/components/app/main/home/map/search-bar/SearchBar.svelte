<script lang="ts">
	import type layers from '$lib/components/app/main/home/map/search-bar/layers';
	import SearchBarInner from '$lib/components/app/main/home/map/search-bar/SearchBarInner.svelte';
	import type { Map } from 'maplibre-gl';

	export let selectedMapLayer: (typeof layers)[0];
	export let searchBar: HTMLDivElement;
	export let poiFeatureOptions: string[];
	export let poiFeaturesFilter: string[];
	export let onlyShowFavourites: boolean;
	export let map: Map;
</script>

<div
	class="z-10 absolute w-full p-2 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex gap-4 justify-between"
	bind:this={searchBar}
>
	<SearchBarInner
		bind:selectedMapLayer
		{poiFeatureOptions}
		bind:poiFeaturesFilter
		bind:onlyShowFavourites
		{map}
		on:poiSelected
	/>
</div>
