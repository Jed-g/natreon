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

		// console.log(response);
		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
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
			const message = `An error has occured: ${response.status}`;
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
			const message = `An error has occured: ${response.status}`;
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
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}

		// console.log(response);
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
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}

		// console.log(response);
		fetchFriends();
		fetchFriendRequests();
	};

	onMount(fetchUsers);
	onMount(fetchFriends);
	onMount(fetchFriendRequests);
</script>

<h1 class="text-xl font-bold mb-4">Your Connections</h1>
{#if friends.length === 0}
	<p>Add some friends to get started!</p>
{:else}
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each friends as friend}
			<Card.Root class="card">
				<Card.Header>
					<Card.Title>{friend.nickname}</Card.Title>
				</Card.Header>
			</Card.Root>
		{/each}
	</div>
{/if}

<h1 class="text-xl font-bold mb-4">Received Friend Requests</h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{#each incomingFriendRequests as incomingFriend}
		<Card.Root class="card">
			<Card.Header>
				<Card.Title>{incomingFriend.user.nickname}</Card.Title>
			</Card.Header>

			<Card.Content>
				<Button
					on:click={() => {
						console.log(incomingFriend.user.id);
						acceptFriendRequest(incomingFriend.id);
					}}>Accept</Button
				>
			</Card.Content>
		</Card.Root>
	{/each}
</div>

<h1 class="text-xl font-bold mb-4">Sent Friend Requests</h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{#each outgoingFriendRequests as outgoingFriend}
		<Card.Root class="card">
			<Card.Header>
				<Card.Title>{outgoingFriend.friend ? outgoingFriend.friend.nickname : '???'}</Card.Title>
			</Card.Header>

		</Card.Root>
	{/each}
</div>

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
