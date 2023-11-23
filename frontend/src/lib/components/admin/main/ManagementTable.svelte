<script lang="ts">
	import { authenticated } from '$lib/stores';
	import { onMount } from 'svelte';
	import type { SvelteComponent } from 'svelte';

	//type TypeFromVar<T> = T[keyof T][];
	type itemType = Record<string, string> & { id: number };
	export let getItemsAction: () => Promise<itemType[]>;
	export let editAction: ((id: number, values: Record<string, string>) => Promise<void>) | null =
		null;
	export let deleteAction: ((id: number) => Promise<void>) | null = null;
	export let tableName: string;
	export let tableHeaders: string[];
	export let editFields: (new (...args: any[]) => SvelteComponent)[];
	export let tableFieldFormatters: Record<string, (value: string) => string>;

	let loading = true;
	let currentlyEdited: {
		id: number;
		values: Record<string, string>;
	} | null = null;
	let items: itemType[];

	const onValueChange = (index: number) => (value: string) => {
		if (currentlyEdited !== null) {
			currentlyEdited.values[Object.keys(currentlyEdited.values)[index]] = value;
		}
	};

	const updateTableUiState = async () => {
		loading = true;
		items = await getItemsAction();
		loading = false;
	};

	const removeIdFromItem = (item: itemType) =>
		Object.keys(item)
			.filter((key) => key !== 'id')
			.reduce((obj, key) => {
				obj[key] = item[key];
				return obj;
			}, {} as Record<string, string>);

	onMount(updateTableUiState);
</script>

<div class="flex"><h1 class="text-2xl">{tableName}</h1></div>
<div class="divider my-2" />
{#if loading}
	<div class="grow flex items-center justify-center">
		<span class="loading loading-ring loading-lg" />
	</div>
{:else if currentlyEdited !== null && editAction !== null}
	<div class="relative grow flex items-center justify-center">
		<div class="relative card w-3/4 h-3/4 dims flex bg-base-200 shadow-xl p-6 flex-col">
			<div class="flex justify-center"><h2>Edit User</h2></div>
			<div class="divider my-2" />
			<form
				class="flex flex-col grow"
				on:submit|preventDefault={async () => {
					if (currentlyEdited !== null && editAction !== null) {
						await editAction(currentlyEdited.id, currentlyEdited.values);
						currentlyEdited = null;
						updateTableUiState();
					}
				}}
			>
				<div class="flex flex-col grow">
					{#each editFields as editField, index (index)}
						<svelte:component
							this={editField}
							value={currentlyEdited.values[Object.keys(currentlyEdited.values)[index]]}
							onValueChange={onValueChange(index)}
						/>
					{/each}
				</div>
				<div class="flex justify-between">
					<button type="button" class="btn" on:click={() => (currentlyEdited = null)}>Cancel</button
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
					{#each tableHeaders as header, index (index)}
						<th>{header}</th>
					{/each}
					<th />
				</tr>
			</thead>
			<tbody>
				{#each items as item (item.id)}
					<tr>
						{#each Object.keys(item).filter((key) => key !== 'id') as key, index (index)}
							{#if Object.keys(tableFieldFormatters).includes(key)}
								<td>{tableFieldFormatters[key](item[key])}</td>
							{:else}
								<td>{item[key]}</td>
							{/if}
						{/each}
						<td class="flex items-center justify-center">
							{#if editAction !== null}<button
									class="btn btn-primary mr-4"
									on:click={() =>
										(currentlyEdited = { id: item.id, values: removeIdFromItem(item) })}
									>Edit</button
								>
							{/if}
							{#if deleteAction !== null}
								<button
									class="btn btn-error"
									on:click={async () => {
										if (deleteAction !== null) {
											await deleteAction(item.id);
											updateTableUiState();
										}
									}}>Delete</button
								>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	.dims {
		min-height: 360px;
		min-width: 300px;
		max-height: 420px;
		max-width: 500px;
	}
</style>
