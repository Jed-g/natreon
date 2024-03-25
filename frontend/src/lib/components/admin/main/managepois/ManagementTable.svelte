<script lang="ts">
	import { onMount } from 'svelte';

	//type TypeFromVar<T> = T[keyof T][];
	type itemType = Record<string, string> & { id: number };
	export let getItemsAction: () => Promise<itemType[]>;
	export let deleteAction: (id: number) => Promise<void>;
	export let tableName: string;
	export let tableHeaders: string[];
	export let createAction: (poi: { name: string, description: string, 
					features: string[], location: string, likes: number, latitude: number, longitude: number }) => Promise<void>;


	let loading = true;
	let currentlyViewed: {
		id: number;
		values: Record<string, string | number>;
	} | null = null;
	let items: itemType[];

	let creatingNewPoi = false;

	let poi = {
        name: '',
        description: '',
        features: [''],
		location: '',
        latitude: 0,
        longitude: 0,
		likes: 0,
    };

    const createNewPoi = () => {
        creatingNewPoi = true;
    };

	let editing = false;

    function startEditing() {
        editing = true;
    }

    function stopEditing() {
        editing = false;
    }


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


<div class="flex">
    <button class="ml-auto btn btn-primary" on:click={createNewPoi}>Create New POI</button>
</div>

<div class="flex"><h1 class="text-2xl">{tableName}</h1></div>
<div class="divider my-2" />
{#if loading}
	<div class="grow flex items-center justify-center">
		<span class="loading loading-ring loading-lg" />
	</div>
{:else if currentlyViewed !== null}
	<div class="relative grow flex items-center justify-center">
		<div class="relative card h-full w-full md:w-3/4 max-w-3xl md:max-h-[32rem] max-h-none flex bg-base-200 shadow-xl p-6 flex-col">
			<div class="flex justify-center"><h2>POI Details</h2>
				{#if !editing}
                    <button class="btn btn-primary" on:click={startEditing}>Edit</button>
                {/if}
			</div>

			<div class="divider my-2" />
			{#if editing}
                <button class="btn btn-primary" on:click={stopEditing}>Done</button>
            {:else}

			<div class="flex flex-col grow">
				<div class="flex flex-col grow">
					<div class="flex mt-2">
						<div class="form-control grow">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text">Name</span>
							</label>
							<p>{currentlyViewed.values.name}</p>
						</div>
						<div class="divider divider-horizontal" />
						<div class="form-control grow">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text">Description</span>
							</label>
							<p>{currentlyViewed.values.description}</p>
						</div>
						<div class="divider divider-horizontal" />
						<div class="form-control grow">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text">Location</span>
							</label>
							<p>{currentlyViewed.values.location}</p>
						</div>
					</div>
					<div class="divider" />
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">Features</span>
						</label>
						<textarea
							class="textarea textarea-bordered h-16"
							disabled
							value={currentlyViewed.values.features}
						/>
					</div>
					<div class="divider" />
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">Likes</span>
						</label>
						<input
							type="Integer"
							class="input input-bordered"
							disabled
							value={currentlyViewed.values.likes}
						/>
					</div>
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">Coordinates</span>
						</label>
						<input
							type="Integer"
							class="input input-bordered"
							disabled
							value={currentlyViewed.values.latitude}
						/>
					</div>
				</div>
				<div class="divider" />
				<div class="flex justify-between">
					<button class="btn" on:click={() => (currentlyViewed = null)}>Cancel</button>
					<button
						class="btn btn-error"
						on:click={() => {
							if (currentlyViewed !== null) {
								deleteAction(currentlyViewed.id);
								currentlyViewed = null;
							}
						}}>Delete</button
					>
				</div>
			</div>
			{/if}
		</div>
	</div>

	{:else if creatingNewPoi}
    <div class="relative grow flex items-center justify-center">
        <div
            class="relative card h-full w-full md:w-3/4 max-w-3xl md:max-h-[32rem] max-h-none flex bg-base-200 shadow-xl p-6 flex-col"
        >
            <div class="flex justify-center"><h2>Create New POI</h2></div>
            <div class="divider my-2" />
			<form class="flex flex-col grow" on:submit={() => {
							createAction(poi);
							creatingNewPoi = false;
							updateTableUiState();
							return false;
						}}>
				<label>
					<span>Name</span>
					<input type="text" bind:value={poi.name} class="input input-bordered" />
				</label>
				<label>
					<span>Description</span>
					<input type="text" bind:value={poi.description} class="input input-bordered" />
				</label>
				<label>
					<span>Features</span>
					<input type="text" bind:value={poi.features} class="input input-bordered" />
				</label>
				<label>
					<span>Location</span>
					<input type="text" bind:value={poi.location} class="input input-bordered" />
				</label>
				<label>
					<span>Latitude</span>
					<input type="number" bind:value={poi.latitude} class="input input-bordered" />
				</label>
				<label>
					<span>Longitude</span>
					<input type="number" bind:value={poi.longitude} class="input input-bordered" />
				</label>
				<button type="submit" class="btn btn-primary mt-4" >Create</button>
				<button class="btn btn-error" on:click={() => creatingNewPoi = false}>Back</button>
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
						<td
							>{item.name.length === 0
								? 'EMPTY'
								: item.name.length > 30
								? Array.from(item.name).slice(0, 30).join('') + '...'
								: item.name}</td
						>
						<td
							>{item.description.length === 0
								? 'EMPTY'
								: item.description.length > 30
								? Array.from(item.description).slice(0, 30).join('') + '...'
								: item.description}</td
						>
						<td
							>{item.location.length === 0
								? 'EMPTY'
								: item.location.length > 10
								? Array.from(item.location).slice(0, 10).join('') + '...'
								: item.location}</td
						>
						<td
							>{item.features.length === 0
								? 'EMPTY'
								: item.features.length > 10
								? Array.from(item.features).slice(0, 10).join('') + '...'
								: item.features}</td
						>
						<td>{item.likes}</td>
						<td>{item.latitude}</td>
						<td>{item.longitude}</td>
						<td class="flex items-center justify-center">
							<button
								class="btn btn-primary mr-4"
								on:click={() => (currentlyViewed = { id: item.id, values: removeIdFromItem(item) })}
								>View</button
							>
							<button
								class="btn btn-error"
								on:click={async () => {
									await deleteAction(item.id);
									updateTableUiState();
								}}>Delete</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
