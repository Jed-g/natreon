<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import ViewDetailsPOI from './ViewDetailsPOI.svelte'; // Assuming the file name is ViewDetailsPOI.svelte
	import type { POI } from './Map.svelte';

	export let poi: POI;
	export let userNickname: string;

	// Define closePOICard function prop
	export let closePOICard: () => void;

	let detailsOpen = false;

	// Define navigate function
	function navigate() {
		console.log('Navigate to the POI');
		const { lng, lat } = poi.lngLat;
		const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
		window.open(url, '_blank');
	}
</script>

<div
	class="z-20 absolute w-full h-72 flex pl-4"
	transition:fly={{ duration: 300, x: 200, y: 0, opacity: 0, easing: quintOut }}
>
	<Card.Root class="flex flex-col grow relative w-full">
		<Card.Header class="p-3">
			<Card.Title>{poi.name}</Card.Title>
		</Card.Header>
		<Card.Content class="grow p-3 flex flex-col overflow-y-auto">
			<Carousel.Root class="w-full">
				<Carousel.Content>
					{#each Array(5) as _, i (i)}
						<Carousel.Item>
							<div class="p-1">
								<Card.Root>
									<Card.Content class="flex aspect-square items-center justify-center p-6">
										<span class="text-4xl font-semibold">{i + 1}</span>
									</Card.Content>
								</Card.Root>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>
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
