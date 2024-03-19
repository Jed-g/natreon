<script lang="ts">
	import ManagementTable from '$lib/components/admin/main/reviews/ManagementTable.svelte';
	import { authenticated } from '$lib/stores';

	const getAllPois = async () => {
		const response = await fetch('/api/admin/pois');
		const data = await response.json();
		console.log(data.users);
		return data.users;
	};

	const deletePoi = async (id: number) => {
		const response = await fetch('/api/admin/reviews', {
			method: 'DELETE',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		authenticated.verify();
		const data = await response.json();
		return data;
	};
</script>

<div class="relative p-6 h-full w-full">
	<div class="relative card flex bg-base-100 shadow-xl p-6 flex-col h-full w-full overflow-x-auto">
		<ManagementTable
			getItemsAction={getAllPois}
			deleteAction={deletePoi}
			tableHeaders={['Name', 'Description', 'Location', 'Features', 'Likes', 'Latitude', 'Longitude']}
			tableName={'POIs'}
		/>
	</div>
</div>
