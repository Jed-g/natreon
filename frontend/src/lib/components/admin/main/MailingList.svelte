<script lang="ts">
	// import ManagementTable from '$lib/components/admin/main/reviews/ManagementTable.svelte';
	// import { authenticated } from '$lib/stores';

	import { onMount } from 'svelte';

	let emails: { email: string }[] = [];

	const getAllEmails = async () => {
		const response = await fetch('/api/admin/mailinglist');
		const data = await response.json();
		//console.log(data.emails);
		return data.emails;
	};

	onMount(async () => {
		emails = await getAllEmails();
	});
</script>

<div class="relative p-6 h-full w-full">
	<div class="flex">
		<h1 class="text-2xl">Mailing List</h1>
	</div>

	<div class="divider my-2" />

	<div class="flex justify-center">
		<div class="stats shadow">
			<div class="stat">
				<div class="stat-title">Total Emails registered</div>
				<div class="stat-value">{emails.length}</div>
			</div>
		</div>
	</div>

	<div class="p-4 overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					<th class="text-center text-2xl">Email</th>
				</tr>
			</thead>
			<tbody>
				{#each emails as email (email)}
					<tr>
						<td class="text-center text-lg">{email.email}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
