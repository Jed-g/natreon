<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';

	let isEditing = false;
	let files: File[] = [];
	let selectedFile: File | null;
	let nicknameMin3 = '';

	let user = { nickname: '', email: '', description: '', profile_picture: '' };

	async function getUserProfile() {
		const response = await fetch('/api/users/profile');
		const data = await response.json();
		user = data;
	}

	function toggleEdit() {
		isEditing = !isEditing;
	}

	$: {
		if (user && user.nickname && user.nickname.length < 3) {
			nicknameMin3 = 'Nickname must be at least 3 characters long';
		} else {
			nicknameMin3 = '';
		}
	}

	async function saveChanges() {
		if (nicknameMin3) {
			return;
		}
		const { profile_picture, ...rest } = user;
		const response = await fetch('/api/users/profile', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user: rest })
		});
		const data = await response.json();
		user = data;
		isEditing = false;
	}

	function backToMap() {
		goto('/app');
	}

	async function handleUpload() {
		if (selectedFile) {
			const formData = new FormData();
			formData.append('profile_picture', selectedFile);

			const response = await fetch('/api/users/profile/update-picture', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				//const data = await response.json();
				//user = { ...user, profile_picture: data.profile_picture };
			} else {
			}
		}
	}

	function selectFile(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input && input.files && input.files.length > 0) {
			selectedFile = input.files[0];
		}
	}

	onMount(getUserProfile);
</script>

<div class="absolute top-2 right-2 flex flex-col items-end">
	<div class="mb-2">
		<button class="btn" on:click={backToMap}>Back to Map</button>
	</div>
</div>

<div class="grow flex flex-col items-center justify-center bg-lime-900">
	<h1 class="text-4xl font-bold mb-6 text-white mt-3">Profile</h1>

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

	<div class="p-6 bg-green-700 text-white rounded shadow-md mt-6 mb-3 w-full md:w-3/4 lg:w-1/2">
		<div class="mb-4">
			<h2 class="text-2xl font-bold mb-2">Profile Picture</h2>
			<div style="display: flex; justify-content: center;">
				<img src={user.profile_picture} alt="Profile Picture" style="width: 200px;" />
			</div>
			<label for="profile-picture">Profile Picture:</label>
			<input
				id="profile-picture"
				type="file"
				accept="image/*"
				on:change={selectFile}
				class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300"
			/>
		</div>

		<Button variant="outline" class="mt-4" on:click={handleUpload}>Upload Profile Picture</Button>
	</div>
</div>
