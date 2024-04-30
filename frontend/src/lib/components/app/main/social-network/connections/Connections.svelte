<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import { onMount } from 'svelte';

	let users: any[] = [];
	let friendRequests: any[] = [];

	const fetchUsers = async () => {
		const response = await fetch('/api/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			}
		});

		console.log(response);
		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}

		users = await response.json();
	};

	const fetchFriendRequests = async () => {
		const response = await fetch('/api/friend_requests', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			}
		});

		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}

		friendRequests = await response.json();
		console.log(friendRequests);
	};

	const sendFriendRequest = async (userId: any) => {
		const response = await fetch('/api/friend_requests', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			},
			body: JSON.stringify({ friend_id: userId })
		});

		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}

		console.log(response);
	};

	onMount(fetchUsers);
	onMount(fetchFriendRequests);
</script>

<h1 class="text-xl font-bold mb-4">Friend Requests</h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{#each friendRequests as friendRequest}
		<Card.Root class="card">
			<Card.Header>
				<Card.Title>{friendRequest.id}</Card.Title>
			</Card.Header>

			<Card.Content>
				<Button on:click={() => console.log('accept')}>Accept</Button>
			</Card.Content>
		</Card.Root>
	{/each}
</div>

<h1 class="text-xl font-bold mb-4">Your Connections</h1>

<h1 class="text-xl font-bold mb-4">People you might know</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{#each users as user}
		<Card.Root class="card">
			<Card.Header>
				<Card.Title>{user.nickname}</Card.Title>
			</Card.Header>

			<Card.Content>
				<Button on:click={() => sendFriendRequest(user.id)}>Add Friend</Button>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
