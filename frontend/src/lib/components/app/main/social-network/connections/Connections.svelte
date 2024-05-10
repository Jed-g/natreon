<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import { onMount } from 'svelte';

	let users: any[] = [];
	let friends: any[] = [];
	let incomingFriendRequests: any[] = [];
	let outgoingFriendRequests: any[] = [];
	let blockedUsers: string | any[] = [];

	const fetchUsers = async () => {
		const response = await fetch('/api/social/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		users = await response.json();
	};

	const fetchFriends = async () => {
		const response = await fetch('/api/social/friends', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		friends = await response.json();

		const blockedResponse = await fetch('/api/social/blocks', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!blockedResponse.ok) {
			const message = `[Connections.svelte] ERROR: ${blockedResponse.status}`;
			throw new Error(message);
		}

		const blockedUsers = await blockedResponse.json();
		console.log('Blocked users:', blockedUsers);
		const unblockedUsers = friends.filter((user: { id: any }) => !blockedUsers.includes(user.id));

		friends = unblockedUsers;
	};

	const fetchFriendRequests = async () => {
		const response = await fetch('/api/social/friend_requests', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
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
		const response = await fetch('/api/social/friend_requests', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
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
		const response = await fetch(`/api/social/friend_requests/${friendRequestId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
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
		const response = await fetch(`/api/social/friend_requests/${friendRequestId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		fetchUsers();
		fetchFriends();
		fetchFriendRequests();
	};

	const deleteFriend = async (friendId: any) => {
		const response = await fetch(`/api/social/friends/${friendId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
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

	const blockUser = async (userId: any) => {
		const response = await fetch(`/api/social/users/block/${userId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		} else {
			deleteFriend(userId);
		}

		rejectFriendRequest(userId);
		fetchUsers();
		fetchFriends();
		fetchBlockedUsers();
	};

	const unblockUser = async (userId: any) => {
		const response = await fetch(`/api/social/users/unblock/${userId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		fetchUsers();
		fetchFriends();
		fetchBlockedUsers();
	};

	const fetchBlockedUsers = async () => {
		const response = await fetch('/api/social/blocks', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			const message = `[Connections.svelte] ERROR: ${response.status}`;
			throw new Error(message);
		}

		blockedUsers = await response.json();
		fetchUsers();
		fetchFriends();
		fetchFriendRequests();
	};

	onMount(fetchUsers);
	onMount(fetchFriends);
	onMount(fetchFriendRequests);
	onMount(fetchBlockedUsers);

	$: users = users.filter(
		(user) =>
			Array.isArray(blockedUsers) &&
			!blockedUsers.some((blockedUser: { id: any }) => blockedUser.id === user.id)
	);
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
					<Button
						class="bg-yellow-500 text-white"
						on:click={() => {
							console.log(`Friend ID: ${friend.id}`);
							blockUser(friend.id);
						}}>Block</Button
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

{#if blockedUsers.length !== 0}
	<h1 class="text-xl font-bold mb-4">Blocked</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
		{#each blockedUsers as user}
			<Card.Root class="card">
				<Card.Header>
					<Card.Title>{user.nickname}</Card.Title>
				</Card.Header>
				<Card.Content>
					<!-- <Button on:click={() => console.log(user.id)}>Unblock User</Button> -->
					<Button on:click={() => unblockUser(user.id)}>Unblock User</Button>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
{/if}
