<script lang="ts">
	import { onMount } from 'svelte';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Card from '$lib/components/ui/card';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const refreshAvatarData: Writable<null | (() => Promise<void>)> = getContext('refreshAvatarData');

	let isEditing = false;
	// let files: File[] = [];
	let selectedFile: File | undefined;
	let nicknameMin3 = '';
	let error = false;
	let loading = true;

	let user: {
		nickname: string;
		email: string;
		description: string;
		profile_picture: string | undefined;
	};

	async function getUserProfile() {
		const response = await fetch('/api/settings/profile');
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
	}

	function toggleEdit() {
		isEditing = !isEditing;
	}

	$: {
		if (user && typeof user.nickname === 'string' && user.nickname.length < 3) {
			nicknameMin3 = 'Nickname must be at least 3 characters long';
		} else {
			nicknameMin3 = '';
		}
	}

	async function saveChanges() {
		if (nicknameMin3) {
			return;
		}
		loading = true;
		const response = await fetch('/api/settings/profile', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user: { ...user, email: undefined, profile_picture: undefined } })
		});
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
		isEditing = false;

		$refreshAvatarData !== null && $refreshAvatarData();
	}

	async function handleUpload() {
		if (selectedFile) {
			const formData = new FormData();
			formData.append('profile_picture', selectedFile);
			loading = true;
			const response = await fetch('/api/settings/profile/update-picture', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				const data = await response.json();
				user = data;

				if (
					user?.nickname === undefined ||
					user?.email === undefined ||
					user?.description === undefined
				) {
					error = true;
				}

				isEditing = false;
			} else {
				error = true;
			}

			loading = false;

			$refreshAvatarData !== null && $refreshAvatarData();
		}
	}

	const VALID_TYPES = ['image/png', 'image/jpeg'];
	function selectFile(event: Event) {
		const input = event.target as HTMLInputElement;
		if (
			input &&
			input.files &&
			input.files.length > 0 &&
			VALID_TYPES.includes(input.files[0].type)
		) {
			selectedFile = input.files[0];
		} else {
			selectedFile = undefined;
		}
	}

	onMount(getUserProfile);
</script>

<div class="grow flex flex-col items-center justify-center">
	{#if loading}
		<div class="grow flex items-center justify-center">
			<span class="loading loading-ring loading-lg" />
		</div>
	{:else if error}
		<div class="grow flex items-center justify-center">
			<Label class="text-error"
				>Failed to fetch or update data. Contact admin for more details.</Label
			>
		</div>
	{:else}
		<div class="p-6 bg-green-700 rounded shadow-md w-full md:w-3/4 lg:w-1/2">
			<div class="mb-4">
				<h2 class="text-2xl font-bold mb-2">Details</h2>
				<div>
					<Label for="nickname">Nickname:</Label>
					<Input
						id="nickname"
						bind:value={user.nickname}
						readonly={isEditing && undefined}
						class={'mt-1 block w-full rounded-md shadow-sm focus:border-green-300 ' +
							(isEditing ? 'bg-card' : 'bg-muted')}
					/>
					{#if nicknameMin3}
						<Label class="text-error">{nicknameMin3}</Label>
					{/if}
				</div>
			</div>

			<div class="mb-4">
				<Label for="email">Email:</Label>
				<Input
					id="email"
					type="text"
					value={user.email}
					readonly
					class="mt-1 block w-full rounded-md shadow-sm focus:border-green-300 bg-muted"
				/>
			</div>

			<div>
				<Label for="description">Description:</Label>
				<Textarea
					id="description"
					rows={5}
					cols={50}
					bind:value={user.description}
					readonly={isEditing && undefined}
					class={'mt-1 block w-full rounded-md shadow-sm focus:border-green-300 ' +
						(isEditing ? 'bg-card' : 'bg-muted')}
				/>
			</div>

			{#if !isEditing}
				<Button variant="outline" class="mt-4" on:click={toggleEdit}>Edit Profile</Button>
			{/if}

			{#if isEditing}
				<div class="text-white text-2xl text-center mt-2">Editing Profile</div>
				<Button variant="outline" class="mt-4" on:click={saveChanges}>Save Changes</Button>
			{/if}
		</div>

		<div class="mb-4 p-6 bg-green-700 text-white rounded shadow-md mt-6 w-full md:w-3/4 lg:w-1/2">
			<div class="mb-4">
				<h2 class="text-2xl font-bold mb-2">Profile Picture</h2>
				{#if user.profile_picture === undefined}
					<Card.Root class="mb-2">
						<Card.Content class="p-2">
							<p class="text-center">You do not currently have a profile picture...</p>
						</Card.Content>
					</Card.Root>
				{:else}
					<Card.Root class="mb-2">
						<Card.Content class="p-2 flex justify-center relative">
							<!-- svelte-ignore a11y-img-redundant-alt -->
							<img
								src={user.profile_picture}
								class="object-contain rounded-xl"
								alt="Profile Picture"
								style="width: max(200px, 75%); max-height: 320px;"
							/>
						</Card.Content>
					</Card.Root>
				{/if}
				<label for="profile-picture">Profile Picture:</label>
				<input
					id="profile-picture"
					type="file"
					accept="image/png, image/jpeg"
					on:change={selectFile}
					class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300"
				/>
			</div>

			<Button variant="outline" class="mt-4" on:click={handleUpload}>Upload Profile Picture</Button>
		</div>
	{/if}
</div>
