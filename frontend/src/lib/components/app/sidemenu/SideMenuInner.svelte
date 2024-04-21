<script lang="ts">
	import AppUrls from '$lib/enums/AppUrls';
	import { createEventDispatcher } from 'svelte';
	import { Map, Settings2, Heart } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import LogoutButton from '$lib/components/LogoutButton.svelte';

	export let slug: string | undefined;

	const dispatch = createEventDispatcher();
</script>

<ul class="menu menu-lg p-4 min-h-full text-base-content flex-nowrap">
	<li>
		<Button
			variant={!slug ? 'secondary' : 'outline'}
			href={`/app${AppUrls.HOME ? '/' + AppUrls.HOME : ''}`}
			data-testid="home-button"
			on:click={() => dispatch('sideMenuItemClicked')}
			class="flex items-center text-sm justify-start"><Map class="h-5 w-5 mr-2" />Home</Button
		>
	</li>
	<div class="my-1" />
	<li>
		<Button
			variant={slug?.split('/')[0] === AppUrls.FAVOURITE_POIS ? 'secondary' : 'outline'}
			href={`/app${AppUrls.FAVOURITE_POIS ? '/' + AppUrls.FAVOURITE_POIS : ''}`}
			data-testid="favourite-pois-button"
			on:click={() => dispatch('sideMenuItemClicked')}
			class="flex items-center text-sm justify-start"
			><Heart class="h-5 w-5 mr-2" />Favourite POIs</Button
		>
	</li>
	<div class="my-1" />
	<li>
		<Button
			variant={slug?.split('/')[0] === AppUrls.SETTINGS ? 'secondary' : 'outline'}
			href={`/app${AppUrls.SETTINGS ? '/' + AppUrls.SETTINGS : ''}`}
			data-testid="settings-button"
			on:click={() => dispatch('sideMenuItemClicked')}
			class="flex items-center text-sm justify-start"
			><Settings2 class="h-5 w-5 mr-2" />Settings</Button
		>
	</li>
	<div class="grow" />
	<div class="my-2" />
	<li>
		<LogoutButton variant="secondary" />
	</li>
</ul>
