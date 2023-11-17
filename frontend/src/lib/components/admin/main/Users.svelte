<script lang="ts">
	import UserType from '$lib/enums/userType';
	import { onMount } from 'svelte';
	import { authenticated } from '$lib/stores';

	const deleteUser = async (id: number) => {
		const response = await fetch('/api/admin/users', {
			method: 'DELETE',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		return data;
	};

	const updateUser = async (id: number, email: string, userType: UserType) => {
		const response = await fetch('/api/admin/users', {
			method: 'POST',
			body: JSON.stringify({ id, email, user_type: userTypeToString(userType) }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		return data;
	};

	const stringToUserType = (userType: string) => {
		switch (userType) {
			case 'customer':
				return UserType.CUSTOMER;
			case 'admin':
				return UserType.ADMIN;
			case 'reporter':
				return UserType.REPORTER;
			default:
				return UserType.CUSTOMER;
		}
	};

	const userTypeToString = (userType: UserType) => {
		switch (userType) {
			case UserType.CUSTOMER:
				return 'customer';
			case UserType.ADMIN:
				return 'admin';
			case UserType.REPORTER:
				return 'reporter';
			default:
				return 'customer';
		}
	};

	const getAllUsers = async () => {
		const response = await fetch('/api/admin/users');
		const data = await response.json();
		return data.users;
	};

	let loading = true;
	let users: { id: number; email: string; userType: UserType }[];
	let currentlyEditedUser: { id: number; email: string; userType: UserType } | null = null;

	const updateUsersUiState = async () => {
		loading = true;
		users = (await getAllUsers()).map(
			({ id, email, user_type }: { id: number; email: string; user_type: string }) => ({
				id,
				email,
				userType: stringToUserType(user_type)
			})
		);
		loading = false;
	};

	onMount(updateUsersUiState);
</script>

<div class="relative p-6 h-full w-full">
	<div class="relative card flex bg-base-100 shadow-xl p-6 flex-col h-full w-full overflow-x-auto">
		<div class="flex"><h1 class="text-2xl">User Management</h1></div>
		<div class="divider my-2" />
		{#if loading}
			<div class="grow flex items-center justify-center">
				<span class="loading loading-ring loading-lg" />
			</div>
		{:else if currentlyEditedUser !== null}
			<div class="relative grow flex items-center justify-center">
				<div class="relative card w-3/4 h-3/4 dims flex bg-base-200 shadow-xl p-6 flex-col">
					<div class="flex justify-center"><h2>Edit User</h2></div>
					<div class="divider my-2" />
					<form
						class="flex flex-col grow"
						on:submit|preventDefault={async () => {
							if (currentlyEditedUser !== null) {
								await updateUser(
									currentlyEditedUser.id,
									currentlyEditedUser.email,
									currentlyEditedUser.userType
								);

								authenticated.verify();
								currentlyEditedUser = null;
								updateUsersUiState();
							}
						}}
					>
						<div class="flex flex-col grow">
							<div class="form-control w-full">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="label">
									<span class="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="Enter email..."
									class="input input-bordered w-full"
									bind:value={currentlyEditedUser.email}
								/>
							</div>
							<div class="form-control w-full">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="label">
									<span class="label-text">User Type</span>
								</label>
								<select
									class="select select-bordered w-full"
									value={userTypeToString(currentlyEditedUser.userType).toUpperCase()}
									on:change={(e) => {
										if (currentlyEditedUser !== null) {
											currentlyEditedUser.userType = stringToUserType(
												e.currentTarget.value.toLowerCase()
											);
										}
									}}
								>
									<option>CUSTOMER</option>
									<option>REPORTER</option>
									<option>ADMIN</option>
								</select>
							</div>
						</div>
						<div class="flex justify-between">
							<button type="button" class="btn" on:click={() => (currentlyEditedUser = null)}
								>Cancel</button
							>
							<button type="submit" class="btn btn-primary">Update</button>
						</div>
					</form>
				</div>
			</div>
		{:else}
			<div class="overflow-x-auto grow">
				<table class="table table-zebra">
					<thead>
						<tr>
							<th>Email</th>
							<th>User Type</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{#each users as { id, email, userType } (id)}
							<tr>
								<td>{email}</td>
								<td>{userTypeToString(userType).toUpperCase()}</td>
								<td class="flex items-center justify-center"
									><button
										class="btn btn-primary mr-4"
										on:click={() => (currentlyEditedUser = { id, email, userType })}>Edit</button
									>
									<button
										class="btn btn-error"
										on:click={async () => {
											await deleteUser(id);
											authenticated.verify();
											updateUsersUiState();
										}}>Delete</button
									></td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</div>

<style>
	.dims {
		min-height: 360px;
		min-width: 300px;
		max-height: 420px;
		max-width: 500px;
	}
</style>
