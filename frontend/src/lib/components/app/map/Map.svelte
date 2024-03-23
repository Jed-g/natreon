<script lang="ts">
	import { MapLibre, Popup, Marker } from 'svelte-maplibre';
	import { Map, NavigationControl, GeolocateControl, ScaleControl } from 'maplibre-gl';
	import { onMount, tick } from 'svelte';
	import { PUBLIC_MAPTILER_URI } from '$env/static/public';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let map: Map;
	let nav: NavigationControl;
	let geolocate: GeolocateControl;
	let scale: ScaleControl;

	let pointsOfInterest: { lngLat: { lng: number; lat: number }; name: string; id: string }[] = [
		{ lngLat: { lng: -1.617439, lat: 54.978252 }, name: 'Newcastle upon Tyne', id: 'newcastle' },
		{ lngLat: { lng: -1.617439, lat: 53.800755 }, name: 'Leeds', id: 'leeds' },
		{ lngLat: { lng: -1.464544, lat: 53.381129 }, name: 'Sheffield', id: 'sheffield' },
		{ lngLat: { lng: -2.242631, lat: 53.480759 }, name: 'Manchester', id: 'manchester' },
		{ lngLat: { lng: -2.978481, lat: 53.408371 }, name: 'Liverpool', id: 'liverpool' },
		{ lngLat: { lng: -1.890401, lat: 52.486243 }, name: 'Birmingham', id: 'birmingham' },
		{ lngLat: { lng: -1.254341, lat: 51.752022 }, name: 'Oxford', id: 'oxford' },
		{ lngLat: { lng: -0.127758, lat: 51.507351 }, name: 'London', id: 'london' },
		{ lngLat: { lng: 1.297355, lat: 52.630885 }, name: 'Norwich', id: 'norwich' },
		{ lngLat: { lng: -0.139475, lat: 50.82253 }, name: 'Brighton', id: 'brighton' },
		{ lngLat: { lng: -1.40435, lat: 50.9097 }, name: 'Southampton', id: 'southampton' },
		{ lngLat: { lng: -2.58791, lat: 51.454513 }, name: 'Bristol', id: 'bristol' },
		{ lngLat: { lng: -3.188267, lat: 51.481583 }, name: 'Cardiff', id: 'cardiff' },
		{ lngLat: { lng: -3.939813, lat: 51.621441 }, name: 'Swansea', id: 'swansea' },
		{ lngLat: { lng: -4.142671, lat: 50.375456 }, name: 'Plymouth', id: 'plymouth' },
		{ lngLat: { lng: -3.532631, lat: 50.718412 }, name: 'Exeter', id: 'exeter' },
		{ lngLat: { lng: -2.361324, lat: 51.10914 }, name: 'Glastonbury', id: 'glastonbury' },
		{ lngLat: { lng: -1.82621, lat: 51.454264 }, name: 'Reading', id: 'reading' },
		{ lngLat: { lng: -0.97813, lat: 51.454264 }, name: 'Basingstoke', id: 'basingstoke' },
		{ lngLat: { lng: -0.75557, lat: 51.335345 }, name: 'Guildford', id: 'guildford' },
		{ lngLat: { lng: -0.376288, lat: 51.41233 }, name: 'Kingston upon Thames', id: 'kingston' },
		{ lngLat: { lng: 0.278154, lat: 51.44142 }, name: 'Maidstone', id: 'maidstone' },
		{ lngLat: { lng: 0.52249, lat: 51.270363 }, name: 'Tunbridge Wells', id: 'tunbridge' },
		{ lngLat: { lng: 1.07561, lat: 51.278707 }, name: 'Canterbury', id: 'canterbury' },
		{ lngLat: { lng: 1.17432, lat: 51.35996 }, name: 'Margate', id: 'margate' },
		{ lngLat: { lng: 1.408852, lat: 50.9097 }, name: 'Dover', id: 'dover' },
		{ lngLat: { lng: 0.73507, lat: 51.656489 }, name: 'Chelmsford', id: 'chelmsford' },
		{ lngLat: { lng: 0.478913, lat: 51.584151 }, name: 'Brentwood', id: 'brentwood' },
		{ lngLat: { lng: 0.267459, lat: 51.588638 }, name: 'Romford', id: 'romford' },
		{ lngLat: { lng: 0.0799, lat: 51.574244 }, name: 'Dagenham', id: 'dagenham' }
	];
	let idOfSelectedPOI: string | null = null;

	let defaultCoords = { lon: 0, lat: 0 };
	let foundLocationByIP = false;
	let loading = true;

	const getPOIById = (id: string) => pointsOfInterest.find(({ id: _id }) => id === _id)!;

	onMount(async () => {
		try {
			const response = await fetch('/api/utils/geolocation');

			if (response.ok) {
				const data = await response.json();
				[defaultCoords.lon, defaultCoords.lat] = [parseFloat(data.lon), parseFloat(data.lat)];
				foundLocationByIP = true;
			} else {
				const response = await fetch('https://api.ipify.org?format=json');
				const data = await response.json();
				const ip = data.ip;

				if (!response.ok) return;

				const secondResponse = await fetch('/api/utils/geolocation-with-ip-param', {
					method: 'POST',
					body: JSON.stringify({ ip }),
					headers: {
						'Content-Type': 'application/json'
					}
				});

				if (!secondResponse.ok) return;
				const secondData = await secondResponse.json();
				[defaultCoords.lon, defaultCoords.lat] = [
					parseFloat(secondData.lon),
					parseFloat(secondData.lat)
				];
				foundLocationByIP = true;
			}
		} catch (error) {
			console.error(error);
		}

		loading = false;
		await tick();

		nav = new NavigationControl({
			visualizePitch: true,
			showZoom: true,
			showCompass: true
		});

		map.addControl(nav, 'bottom-right');
		nav._container.parentElement!.style.zIndex = '0';

		// Add a geolocate control to the map.
		geolocate = new GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		});

		map.addControl(geolocate, 'bottom-right');

		scale = new ScaleControl({
			maxWidth: 160,
			unit: 'metric'
		});

		map.addControl(scale, 'bottom-left');

		map.on('load', () => {
			map.resize();
			geolocate.trigger();
		});
	});
</script>

<svelte:window on:resize={() => map?.resize()} />

{#if loading}
	<div class="grow flex items-center justify-center">
		<span class="loading loading-ring loading-lg" />
	</div>
{:else}
	<MapLibre
		bind:map
		style={PUBLIC_MAPTILER_URI}
		class="h-full w-full absolute"
		zoom={foundLocationByIP ? 6 : 1}
		center={[defaultCoords.lon, defaultCoords.lat]}
		attributionControl={false}
	>
		{#each pointsOfInterest as { lngLat, name, id } (id)}
			<Marker
				{lngLat}
				on:click={() => {
					idOfSelectedPOI = id;
					map.flyTo({ center: lngLat });
				}}
				class={'grid h-8 w-8 place-items-center rounded-full border border-zinc-600 bg-red-300 text-black shadow-2xl focus:outline-2 focus:outline-black' +
					(idOfSelectedPOI === id ? ' border-4 box-content' : '')}
			>
				<span class="text-xl">🌲</span>
				<Popup openOn="hover" offset={[0, -10]}>
					<div class="text-lg font-bold text-black">{name}</div>
				</Popup>
			</Marker>
		{/each}
	</MapLibre>
	{#if idOfSelectedPOI !== null}
		{@const poi = getPOIById(idOfSelectedPOI)}
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
						on:click={() => {
							console.log('Open up Google Maps and do other stuff...');
						}}>Navigate</Button
					>
					<Button
						variant="secondary"
						size="sm"
						class="basis-1/2"
						on:click={() => (idOfSelectedPOI = null)}>Close</Button
					>
				</Card.Footer>
			</Card.Root>
		</div>
	{/if}
{/if}
