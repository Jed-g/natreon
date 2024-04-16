<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import ViewDetailsPOI from './ViewDetailsPOI.svelte'; // Assuming the file name is ViewDetailsPOI.svelte


    export let poi: {
    lngLat: { lng: number; lat: number };
    name: string;
    id: string;
    description: string;
    features: string[];
    comments: string[]; // Add the 'comment' variable here
};
  
    // Define closePOICard function
    export let closePOICard: () => void;

    let selectedPOI: { id: any; name: any; description: any; features: any; comments: any;} | null = null;

    // Define navigate function
    function navigate() {
        console.log("Navigate to the POI");
        const { lng, lat } = poi.lngLat;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        window.open(url, '_blank');
    }

    // Define ViewDetails function
    function openPOIDetailsWindow() {
        console.log("View Details");
        selectedPOI = {
            id: poi.id,
            name: poi.name,
            description: poi.description,
            features: poi.features,
            comments: poi.comments
        };
    }
</script>

<div
    class="absolute w-70 h-64 top-2 right-2 flex"
    transition:fly={{ duration: 300, x: 200, y: 0, opacity: 0, easing: quintOut }}
>
    <Card.Root class="flex flex-col grow">
        <Card.Header class="p-3">
            <Card.Title>{poi.name}</Card.Title>
        </Card.Header>
        <Card.Content class="grow p-3 flex flex-col overflow-y-auto">
            <p>Description: {poi.description}</p>
            <p>Features:</p>
            {#each poi.features as feature}
                <p>{feature}</p>
            {/each}
        </Card.Content>
        <Card.Footer class="flex justify-between p-3 grow-0 gap-2">
            <Button
                size="sm"
                class="basis-1/3"
                on:click={navigate}>Navigate</Button
            >
            <Button
                variant="secondary"
                size="sm"
                class="basis-1/3"
                on:click={openPOIDetailsWindow}>View Details</Button
            >
            <Button
                variant="secondary"
                size="sm"
                class="basis-1/3"
                on:click={closePOICard}>Close</Button
            >
        </Card.Footer>
    </Card.Root>
</div>

<!-- Display ViewDetailsPOI component when selectedPOI is not null -->
{#if selectedPOI !== null}
    <ViewDetailsPOI
        id={selectedPOI.id}
        name={selectedPOI.name}
        description={selectedPOI.description}
        features={selectedPOI.features}
        comments={selectedPOI.comments}
    />
{/if}