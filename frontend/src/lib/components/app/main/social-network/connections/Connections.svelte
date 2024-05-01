<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import { onMount } from 'svelte';

	let users: any[] = [];
	let friends: any[] = [];
	let incomingFriendRequests: any[] = [];
	let outgoingFriendRequests: any[] = [];

	const fetchUsers = async () => {
		const response = await fetch('/api/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			}
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		users = await response.json();
	};

	const fetchFriends = async () => {
		const response = await fetch('/api/friends', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			}
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		friends = await response.json();
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
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		const data = await response.json();
		incomingFriendRequests = data.incoming;
		outgoingFriendRequests = data.outgoing;
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
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		fetchUsers();
		fetchFriends();
		fetchFriendRequests();
	};

	const acceptFriendRequest = async (friendRequestId: any) => {
		const response = await fetch(`/api/friend_requests/${friendRequestId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			},
			body: JSON.stringify({ friend_id: friendRequestId })
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		fetchUsers();
		fetchFriends();
		fetchFriendRequests();
	};

	const rejectFriendRequest = async (friendRequestId: any) => {
		const response = await fetch(`/api/friend_requests/${friendRequestId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			},
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		fetchUsers();
		fetchFriends();
		fetchFriendRequests();
	}

	const deleteFriend = async (friendId: any) => {
		const response = await fetch(`/api/friends/${friendId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			},
			body: JSON.stringify({ id: friendId })
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		fetchUsers();
		fetchFriends();
		fetchFriendRequests();
	};

	onMount(fetchUsers);
	onMount(fetchFriends);
	onMount(fetchFriendRequests);
</script>

<h1 class="text-xl font-bold mb-4">Your Connections</h1>
{#if friends.length === 0}
	<p class="mb-8">Add some friends to get started!</p>
{:else}
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
		{#each friends as friend}
			<Card.Root class="card">
				<Card.Header>
					<Card.Title>{friend.nickname}</Card.Title>
				</Card.Header>
				<Card.Content>
					<Button
						class="bg-red-500 text-white"
						on:click={() => {
							console.log(friend.id);
							deleteFriend(friend.id);
						}}>Delete</Button
					>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
{/if}

{#if incomingFriendRequests.length !== 0}
	<h1 class="text-xl font-bold mb-4">Received Friend Requests</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
		{#each incomingFriendRequests as incomingFriend}
			<Card.Root class="card">
				<Card.Header>
					<Card.Title>{incomingFriend.user ? incomingFriend.user.nickname : 'Unknown'}</Card.Title>
				</Card.Header>

				<Card.Content>
					<Button
						on:click={() => {
							acceptFriendRequest(incomingFriend.id);
						}}>Accept</Button
					>
					<Button
						class="bg-red-500 text-white"
						on:click={() => {
							rejectFriendRequest(incomingFriend.id);
						}}>Reject</Button
					>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
{/if}

{#if users.length !== 0}
	<h1 class="text-xl font-bold mb-4">People you might know</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
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
{/if}

{#if outgoingFriendRequests.length !== 0}
	<h1 class="text-xl font-bold mb-4">Sent Friend Requests</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
		{#each outgoingFriendRequests as outgoingFriend}
			<Card.Root class="card">
				<Card.Header>
					<Card.Title
						>{outgoingFriend.friend ? outgoingFriend.friend.nickname : 'Unknown'}</Card.Title
					>
				</Card.Header>
			</Card.Root>
		{/each}
	</div>
{/if}
