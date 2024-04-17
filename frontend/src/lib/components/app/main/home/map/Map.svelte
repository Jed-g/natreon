<script lang="ts">
	import { MapLibre, Popup, Marker } from 'svelte-maplibre';
	import { Map, NavigationControl, GeolocateControl, ScaleControl } from 'maplibre-gl';
	import { onMount, tick } from 'svelte';
	import POIcard from './POIcard.svelte';
	import layers from '$lib/components/app/main/home/map/search-bar/layers';
	import SearchBar from '$lib/components/app/main/home/map/search-bar/SearchBar.svelte';
	import * as t from 'io-ts';
	import { isRight } from 'fp-ts/Either';

	const POIType = t.type({
		lngLat: t.type({ lng: t.number, lat: t.number }),
		name: t.string,
		id: t.number,
		description: t.string,
		features: t.array(t.string),
		comments: t.array(t.string)
	});

	type POI = t.TypeOf<typeof POIType>;

	let selectedMapLayer = layers.find(({ value }) => value === 'outdoor')!;

	onMount(() => {
		const preferredMapLayer = localStorage.getItem('preferredMapLayer');

		if (preferredMapLayer && layers.map(({ value }) => value).includes(preferredMapLayer)) {
			selectedMapLayer = layers.find(({ value }) => value === preferredMapLayer)!;
		}
	});

	let map: Map;
	let nav: NavigationControl;
	let geolocate: GeolocateControl;
	let scale: ScaleControl;

	let searchBar: HTMLDivElement;
	let searchBarHeight = 64;

	let pointsOfInterest: POI[] = [];
	let idOfSelectedPOI: number | null = null;

	let defaultCoords = { lon: 0, lat: 0 };
	let foundLocationByIP = false;
	let loading = true;

	let previousPOIRequestParams: {
		north: string;
		south: string;
		east: string;
		west: string;
	} | null = null;

	const sortedStringify = (obj: Record<string, string>) => {
		return JSON.stringify(obj, Object.keys(obj).sort());
	};

	const updatePOIData = async () => {
		const mapBound = map.getBounds();
		const north = mapBound._ne.lat;
		const south = mapBound._sw.lat;
		const east = mapBound._ne.lng;
		const west = mapBound._sw.lng;

		const paramsFormatted = {
			north: north > 90 ? '90' : north.toString(),
			south: south < -90 ? '-90' : south.toString(),
			east: east > 180 ? '180' : east.toString(),
			west: west < -180 ? '-180' : west.toString()
		};

		if (
			previousPOIRequestParams !== null &&
			sortedStringify(previousPOIRequestParams) === sortedStringify(paramsFormatted)
		) {
			return;
		}

		previousPOIRequestParams = paramsFormatted;
		const params = new URLSearchParams(paramsFormatted);

		const response = await fetch(`/api/poi?${params.toString()}`);

		if (response.ok) {
			const data = await response.json();

			const newPOIs = data.pois;

			newPOIs.forEach((newPOI: any) => {
				const validationResult = POIType.decode(newPOI);

				if (isRight(validationResult)) {
					const newPOI: POI = validationResult.right;
					if (!pointsOfInterest.some((poi) => poi.id === newPOI.id)) {
						pointsOfInterest = [...pointsOfInterest, newPOI];
					}
				} else {
					console.error('Invalid POI object received from API: ', validationResult.left);
				}
			});
		}
	};

	const getPOIById = (id: number) => pointsOfInterest.find(({ id: _id }) => id === _id)!;

	onMount(async () => {
		try {
			const response = await fetch('/api/utils/geolocation');

			if (response.ok) {
				const data = await response.json();
				if (!isNaN(parseFloat(data.lon)) && !isNaN(parseFloat(data.lat))) {
					[defaultCoords.lon, defaultCoords.lat] = [parseFloat(data.lon), parseFloat(data.lat)];
					foundLocationByIP = true;
				}
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

				if (!isNaN(parseFloat(secondData.lon)) && !isNaN(parseFloat(secondData.lat))) {
					[defaultCoords.lon, defaultCoords.lat] = [
						parseFloat(secondData.lon),
						parseFloat(secondData.lat)
					];
					foundLocationByIP = true;
				}
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
		nav._container.parentElement!.style.zIndex = '10';

		// Add a geolocate control to the map.
		geolocate = new GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		});

		map.addControl(geolocate, 'bottom-right');
		geolocate._container.parentElement!.style.zIndex = '10';

		scale = new ScaleControl({
			maxWidth: 160,
			unit: 'metric'
		});

		map.addControl(scale, 'bottom-left');
		scale._container.parentElement!.style.zIndex = '10';

		map.on('load', () => {
			map.resize();
			geolocate.trigger();
		});

		map.on('pitchend', updatePOIData);

		if (searchBar) {
			searchBarHeight = searchBar.offsetHeight;
		}
	});

	function closePOICard() {
		console.log('Close POI Card');
		idOfSelectedPOI = null;
		// Update the state or perform any necessary action
	}
</script>

<svelte:window
	on:resize={() => {
		map?.resize();

		if (searchBar) {
			searchBarHeight = searchBar.offsetHeight;
		}
	}}
/>

{#if loading}
	<div class="grow flex items-center justify-center">
		<span class="loading loading-ring loading-lg" />
	</div>
{:else}
	<MapLibre
		bind:map
		style={selectedMapLayer.URI}
		class="h-full w-full absolute"
		zoom={foundLocationByIP ? 6 : 1}
		center={[defaultCoords.lon, defaultCoords.lat]}
		attributionControl={false}
		on:moveend={updatePOIData}
		on:zoomend={updatePOIData}
	>
		{#each pointsOfInterest as { lngLat, name, id } (id)}
			<Marker
				{lngLat}
				on:click={() => {
					idOfSelectedPOI = id;
					map.flyTo({ center: lngLat });
				}}
				class={'z-10 grid h-8 w-8 place-items-center rounded-full border border-zinc-600 bg-red-300 text-black shadow-2xl focus:outline-2 focus:outline-black' +
					(idOfSelectedPOI === id ? ' border-4 box-content' : '')}
			>
				<span class="text-xl">🌲</span>
				<Popup openOn="hover" offset={[0, -10]}>
					<div class="text-lg font-bold text-black">{name}</div>
				</Popup>
			</Marker>
		{/each}
	</MapLibre>
	<SearchBar bind:searchBar bind:selectedMapLayer />
	{#if idOfSelectedPOI !== null}
		{@const poi = getPOIById(idOfSelectedPOI)}
		<div
			class="absolute w-full max-w-xs sm:max-w-md md:max-w-xl top-2 right-2"
			style={`margin-top: ${searchBarHeight}px;`}
		>
			<POIcard {closePOICard} {poi} />
		</div>
	{/if}
{/if}
