<script lang="ts">
	import type layers from '$lib/components/app/main/home/map/search-bar/layers';
	import SearchBarInner from '$lib/components/app/main/home/map/search-bar/SearchBarInner.svelte';
	import type { Map } from 'maplibre-gl';
	import type { POI } from '../Map.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import { tick } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { sleep } from '$lib/utils';

	export let selectedMapLayer: (typeof layers)[0];
	export let searchBar: HTMLDivElement;
	export let poiFeatureOptions: string[];
	export let poiFeaturesFilter: string[];
	export let onlyShowFavourites: boolean;
	export let map: Map;
	export let checkInCandidates: POI[];
	export let updateSearchBarOffset: () => void;
	export let idOfSelectedPOI: number | null;

	let accordionValue = '';
	let lastIdOfSelectedPOI: number | null = null;

	const dispatch = createEventDispatcher();

	const closeAccordionAndDispatch = (poiId: number) => {
		accordionValue = '';
		dispatch('poiSelected', poiId);
	};

	$: {
		if (checkInCandidates.length === 0) {
			accordionValue = '';
		}
	}

	let idOfSelectedPOIChangeFromParent = true;
	$: if (idOfSelectedPOI !== null) {
		accordionValue = '';
	} else if (idOfSelectedPOIChangeFromParent) {
		lastIdOfSelectedPOI = null;
	} else {
		idOfSelectedPOIChangeFromParent = true;
	}

	let oldCheckInCandidatesLength = 0;
	$: (async () => {
		if (checkInCandidates.length !== oldCheckInCandidatesLength) {
			oldCheckInCandidatesLength = checkInCandidates.length;
			await tick();
			updateSearchBarOffset();
		}
	})();
</script>

<svelte:window
	on:resize={async () => {
		map?.resize();

		if (accordionValue !== '') {
			const currentValue = accordionValue;
			accordionValue = '';
			await sleep(250);
			updateSearchBarOffset();
			accordionValue = currentValue;
		} else {
			updateSearchBarOffset();
		}
	}}
/>

<div
	class="z-10 absolute w-full p-2 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col gap-2 justify-between"
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
	{#if checkInCandidates.length > 0}
		<Accordion.Root
			bind:value={accordionValue}
			onValueChange={(newValue) => {
				if (newValue !== undefined && newValue !== '') {
					idOfSelectedPOIChangeFromParent = false;
					lastIdOfSelectedPOI = idOfSelectedPOI;
					idOfSelectedPOI = null;
				} else if (lastIdOfSelectedPOI !== null) {
					idOfSelectedPOIChangeFromParent = false;
					idOfSelectedPOI = lastIdOfSelectedPOI;
				}
			}}
		>
			<Accordion.Item value="check-in-prompt" class="border-b-0">
				<Accordion.Trigger
					class="hover:no-underline hover:backdrop-opacity-75 active:backdrop-opacity-95 rounded-md h-10 px-4 py-2"
					>Check-in to nearby POI{checkInCandidates.length > 1 ? 's' : ''}:</Accordion.Trigger
				>
				<Accordion.Content class="*:p-0 max-h-36 overflow-y-auto">
					{#each checkInCandidates as candidate (candidate.id)}
						<div class="flex justify-between items-center gap-4 px-4 py-2">
							<p class="max-sm:text-ellipsis max-sm:max-w-48 max-sm:overflow-hidden">
								{#each candidate.name.split(' ') as word, index (index)}
									{#if index === 0}
										{word}
									{:else}
										&nbsp;{word}
									{/if}
								{/each}
							</p>
							<div class="flex items-center gap-2">
								<Button
									size="sm"
									variant="secondary"
									on:click={() => closeAccordionAndDispatch(candidate.id)}>View</Button
								>
								<Button size="sm" on:click={() => console.log('TODO: Check-in')}>Check-in</Button>
							</div>
						</div>
					{/each}
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	{/if}
</div>
