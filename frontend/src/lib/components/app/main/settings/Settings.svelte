<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';
	import ViewProfile from '$lib/components/app/main/settings/profile/ViewProfile.svelte';
	import Page2 from '$lib/components/app/main/settings/page-2/Page2.svelte';
	import Page3 from '$lib/components/app/main/settings/page-3/Page3.svelte';
	import AppUrls from '$lib/enums/AppUrls';
	import { User, Info } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { goto } from '$app/navigation';

	export let slug: string;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let settingsComponent: (new (...args: any[]) => SvelteComponent) | null = null;
	let pageTitle = '';

	$: {
		switch (slug) {
			case AppUrls.SETTINGS_PROFILE:
				settingsComponent = ViewProfile;
				pageTitle = 'Profile';
				break;
			case AppUrls.SETTINGS_PAGE_2:
				settingsComponent = Page2;
				pageTitle = 'Page2';
				break;
			case AppUrls.SETTINGS_PAGE_3:
				settingsComponent = Page3;
				pageTitle = 'Page3';
				break;
			default:
				goto('/app/' + AppUrls.SETTINGS_PROFILE);
				break;
		}
	}

	let bottomNav: HTMLDivElement;
	let bottomNavHeight = 64;
	let cardHeader: HTMLDivElement;
	let cardHeaderHeight = 64;

	const updateLayoutOffsets = () => {
		let height = bottomNav.offsetHeight;
		if (height !== undefined) {
			bottomNavHeight = height;
		}

		height = cardHeader.offsetHeight;
		if (height !== undefined) {
			cardHeaderHeight = height;
		}
	};

	onMount(updateLayoutOffsets);
</script>

<svelte:head>
	<title>{pageTitle} - Settings</title>
</svelte:head>

<svelte:window on:resize={updateLayoutOffsets} />

<div class="flex grow flex-col relative h-full">
	<div class="flex flex-col p-4 relative" style={`height: calc(100% - ${bottomNavHeight}px);`}>
		<Card.Root class="relative p-4 h-full">
			<div bind:this={cardHeader}>
				<Card.Header class="p-0 pb-4 space-y-0">
					<Card.Title class="mb-3">{pageTitle}</Card.Title>
					<Separator />
				</Card.Header>
			</div>
			<Card.Content
				class="flex flex-col overflow-y-auto p-0"
				style={`height: calc(100% - ${cardHeaderHeight}px);`}
			>
				<svelte:component this={settingsComponent} />
			</Card.Content>
		</Card.Root>
	</div>
	<div class="btm-nav static max-sm:btm-nav-md" bind:this={bottomNav}>
		<a
			class="text-primary"
			href={`/app/${AppUrls.SETTINGS_PROFILE}`}
			class:active={slug === AppUrls.SETTINGS_PROFILE}
			data-testid="settings-profile-button"
		>
			<User class="h-5 w-5" />
			<span class="btm-nav-label text-neutral-content">Profile</span>
		</a>
		<a
			class="text-primary"
			href={`/app/${AppUrls.SETTINGS_PAGE_2}`}
			class:active={slug === AppUrls.SETTINGS_PAGE_2}
			data-testid="settings-page-2-button"
		>
			<Info class="h-5 w-5" />
			<span class="btm-nav-label text-neutral-content">Page 2</span>
		</a>
		<a
			class="text-primary"
			href={`/app/${AppUrls.SETTINGS_PAGE_3}`}
			class:active={slug === AppUrls.SETTINGS_PAGE_3}
			data-testid="settings-page-3-button"
		>
			<Info class="h-5 w-5" />
			<span class="btm-nav-label text-neutral-content">Page 3</span>
		</a>
	</div>
</div>
