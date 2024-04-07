<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import { logOut } from '$lib/auth';
	import { authenticated } from '$lib/stores';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { User } from 'lucide-svelte';

	let user: {
		nickname: string;
		email: string;
		description: string;
		profile_picture: string | undefined;
	};
	let error = false;
	let loading = true;

	const refreshAvatarData: Writable<null | (() => Promise<void>)> = getContext('refreshAvatarData');

	const getUserProfile = async () => {
		const response = await fetch('/api/users/profile');
		const data = await response.json();
		user = data;

		if (
			user?.nickname === undefined ||
			user?.email === undefined ||
			user?.description === undefined
		) {
			error = true;
		}

		loading = false;
	};

	refreshAvatarData.set(getUserProfile);

	const handleLogout = async () => {
		const logoutSuccessful = await logOut();
		logoutSuccessful && authenticated.verify();
	};

	let unsubscribe: () => void;

	onMount(() => {
		getUserProfile();
		unsubscribe = page.subscribe(() => {
			getUserProfile();
		});

		return () => unsubscribe();
	});
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full mx-1">
			<Avatar.Root class="h-10 w-10">
				{#if loading}
					<Avatar.Fallback><span class="loading loading-ring loading-lg" /></Avatar.Fallback>
				{:else if !error}
					{#if user.profile_picture !== undefined}
						<Avatar.Image src={user.profile_picture} alt="Profile Picture" class="bg-card" />
					{/if}
					<Avatar.Fallback><User class="h-5 w-5" /></Avatar.Fallback>
				{:else}
					<Avatar.Fallback class="bg-error text-2xl">!</Avatar.Fallback>
				{/if}
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="end">
		{#if loading}
			<div class="h-16 flex items-center justify-center">
				<span class="loading loading-ring loading-lg" />
			</div>
		{:else if error}
			<DropdownMenu.Label class="font-normal">
				<div class="flex flex-col space-y-1">
					<p class="text-xs leading-none text-error">Failed To Fetch</p>
				</div>
			</DropdownMenu.Label>
		{:else}
			<DropdownMenu.Item class="font-normal cursor-pointer" on:click={() => goto('/app')}>
				<div class="flex flex-col space-y-1">
					<p class="text-sm font-medium leading-none">{user.nickname}</p>
					<p class="text-xs leading-none text-muted-foreground">@{user.nickname}</p>
				</div>
			</DropdownMenu.Item>
		{/if}
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item class="cursor-pointer" on:click={() => goto('/app/settings')}
				>Settings</DropdownMenu.Item
			>
			<DropdownMenu.Item class="cursor-pointer" on:click={handleLogout}>Log out</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
