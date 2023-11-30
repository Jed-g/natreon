<script lang="ts">
	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { onMount } from 'svelte';

	let mapContainer: Element;

	onMount(async () => {
		let foundLocationByIP = false;
		let defaultCoords = { lon: 0, lat: 0 };

		try {
			const ip = await (await fetch('https://api64.ipify.org?format=json')).json();

			const ipToGeoCoords = await (
				await fetch(`https://get.geojs.io/v1/ip/geo/${ip.ip}.json`)
			).json();

			[defaultCoords.lon, defaultCoords.lat] = [
				parseFloat(ipToGeoCoords.longitude),
				parseFloat(ipToGeoCoords.latitude)
			];
			foundLocationByIP = true;
		} catch (error) {}

		const map = new maplibregl.Map({
			container: 'map',
			style: 'https://api.maptiler.com/maps/outdoor-v2/style.json?key=w6bcFm6b0jnIQQPCXazJ',
			center: [defaultCoords.lon, defaultCoords.lat], // starting position [lng, lat]
			zoom: foundLocationByIP ? 6 : 1, // starting zoom
			attributionControl: false
		});

		const nav = new maplibregl.NavigationControl({
			visualizePitch: true,
			showZoom: true,
			showCompass: true
		});

		map.addControl(nav, 'bottom-right');
		nav._container.parentElement!.style.zIndex = '0';

		// Add a geolocate control to the map.
		const geolocate = new maplibregl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		});

		map.addControl(geolocate, 'bottom-right');

		map.on('load', () => {
			map.resize();
			geolocate.trigger();
		});

		const resizeObserver = new ResizeObserver(() => {
			map.resize();
			return () => resizeObserver.unobserve(mapContainer);
		});
	});
</script>

<div id="map" class="h-full w-full absolute" bind:this={mapContainer} />
