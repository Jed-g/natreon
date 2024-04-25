<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import ViewDetailsPOI from './ViewDetailsPOI.svelte'; // Assuming the file name is ViewDetailsPOI.svelte
	import type { POI } from './Map.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Heart } from 'lucide-svelte';
	import { tick } from 'svelte';

	export let poi: POI;
	export let userNickname: string;

	// Define closePOICard function prop
	export let closePOICard: () => void;
	export let refreshPOIs: () => void;

	let detailsOpen = false;

	let hoverCardsOpened = [false];

	const closeAllHoverCards = () => {
		hoverCardsOpened = new Array(hoverCardsOpened.length).fill(false);
	};

	// Define navigate function
	function navigate() {
		console.log('Navigate to the POI');
		const { lng, lat } = poi.lngLat;
		const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
			lat
		)},${encodeURIComponent(lng)}`;
		window.open(url, '_blank');
	}

	const syncFavouritePOIToggle = async () => {
		const response = await fetch('/api/favourites/single?poi_id=' + encodeURIComponent(poi.id));
		const data = await response.json();
		if (typeof data !== 'boolean') return;
		poi.isFavourite = !poi.isFavourite;
		await tick();

		poi.isFavourite = data;
	};

	const overrideInitialFavouriteToggleUIUpdate = async () => {
		const oldValue = poi.isFavourite;
		poi.isFavourite = !poi.isFavourite;
		await tick();

		poi.isFavourite = oldValue;
	};

	let favouriteUpdateInProgress = false;
	const updateFavourite = async (newValue: boolean) => {
		overrideInitialFavouriteToggleUIUpdate();
		if (favouriteUpdateInProgress) return;
		favouriteUpdateInProgress = true;
		if (newValue) {
			await fetch('/api/favourites?poi_id=' + encodeURIComponent(poi.id), { method: 'POST' });
		} else {
			await fetch('/api/favourites?poi_id=' + encodeURIComponent(poi.id), {
				method: 'DELETE'
			});
		}
		await syncFavouritePOIToggle();
		refreshPOIs();
		favouriteUpdateInProgress = false;
	};
</script>

<div
	class="z-20 absolute w-full h-72 flex pl-4"
	transition:fly={{ duration: 300, x: 200, y: 0, opacity: 0, easing: quintOut }}
>
	<Card.Root class="flex flex-col grow relative w-full">
		<Card.Header class="p-3">
			<Card.Title>
				<div class="flex justify-between items-center">
					<p>{poi.name}</p>
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
							<Toggle
								class="text-secondary-foreground hover:text-accent-foreground data-[state=off]:hover:bg-accent data-[state=off]:bg-background data-[state=on]:bg-primary data-[state=on]:hover:brightness-90 data-[state=on]:text-error-content"
								pressed={poi.isFavourite}
								onPressedChange={updateFavourite}
								><div class="flex gap-2 items-center">
									{poi.isFavourite ? 'Remove From Favourites' : 'Add To Favourites'}<Heart />
								</div></Toggle
							>
						</HoverCard.Trigger>
						<HoverCard.Content class="w-fit h-fit py-2 px-2.5">
							<div class="text-xs flex items-center">Add/Remove Favourite</div>
						</HoverCard.Content>
					</HoverCard.Root>
				</div>
			</Card.Title>
		</Card.Header>
		<Card.Content class="grow p-3 flex flex-col overflow-y-auto">
			{#if poi.pictures.length === 0}
				<Card.Root class="mb-2">
					<Card.Content class="p-2">
						<p class="text-center">No Pictures available for this Point of Interest</p>
					</Card.Content>
				</Card.Root>
			{:else}
				<Carousel.Root class="w-full">
					<Carousel.Content>
						{#each poi.pictures as picture, index (index)}
							<Carousel.Item>
								<div class="p-1">
									<Card.Root>
										<Card.Content class="flex aspect-square items-center justify-center p-6">
											<img src={picture} alt={"Picture " + (index + 1)} class="max-h-full max-w-full" />
										</Card.Content>
									</Card.Root>
								</div>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
				</Carousel.Root>
			{/if}
			<p>Description: {poi.description}</p>
			<p>Features:</p>
			<ul>
				{#each poi.features as feature}
					<li>{feature}</li>
				{/each}
			</ul>
		</Card.Content>
		<Card.Footer class="flex justify-between p-3 grow-0 gap-2">
			<Button size="sm" class="basis-1/3" on:click={navigate}>Navigate</Button>
			<Button variant="secondary" size="sm" class="basis-1/3" on:click={() => (detailsOpen = true)}
				>View Details</Button
			>
			<Button variant="secondary" size="sm" class="basis-1/3" on:click={closePOICard}>Close</Button>
		</Card.Footer>
	</Card.Root>
</div>

<!-- Display ViewDetailsPOI component when selectedPOI is not null -->
{#if detailsOpen}
	<ViewDetailsPOI {poi} onClose={() => (detailsOpen = false)} {userNickname} />
{/if}
