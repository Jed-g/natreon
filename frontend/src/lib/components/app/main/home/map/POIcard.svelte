<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
    import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
  
    export let poi: { lngLat: { lng: number; lat: number }; name: string; id: string };

    //export let poi: { lngLat: { lng: number; lat: number }; name: string; id: string ; description: string ; features : string [] };
  
    // Function to handle navigation
    // Define closePOICard function
    export let closePOICard: () => void;

    // Define navigate function
    export let navigate: () => void;

  </script>
  
    <div
        class="absolute w-56 h-64 top-2 right-2 overflow-y-auto flex"
        transition:fly={{ duration: 300, x: 200, y: 0, opacity: 0, easing: quintOut }}
    >
        <Card.Root class="flex flex-col grow">
            <Card.Header class="p-3">
                <Card.Title>{poi.name}</Card.Title>
            </Card.Header>
            <Card.Content class="grow p-3 flex flex-col">
                <p>ID: {poi.id}</p>
                <p>Longitude: {poi.lngLat.lng}</p>
                <p>Latitude: {poi.lngLat.lat}</p>
            </Card.Content>
            <Card.Footer class="flex justify-between p-3 grow-0 gap-2">
                <Button
                    size="sm"
                    class="basis-1/2"
                    on:click={navigate}>Navigate</Button
                >
                <Button
                    variant="secondary"
                    size="sm"
                    class="basis-1/2"
                    on:click={closePOICard}>Close</Button
                >
            </Card.Footer>
        </Card.Root>
    </div>