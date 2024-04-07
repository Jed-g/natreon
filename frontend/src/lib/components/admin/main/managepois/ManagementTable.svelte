<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import validIcon from '@iconify-icons/mdi/checkbox-marked';
	import errorIcon from '@iconify-icons/mdi/close-box';

	//type TypeFromVar<T> = T[keyof T][];
	type itemType = Record<string, string> & { id: number };
	export let getItemsAction: () => Promise<itemType[]>;
	export let deleteAction: (id: number) => Promise<void>;
	export let tableName: string;
	export let tableHeaders: string[];
	export let createAction: (poi: {
		name: string;
		description: string;
		features: string[];
		location: string;
		likes: number;
		latitude: number;
		longitude: number;
	}) => Promise<void>;
	export let editAction: (
		id: number,
		values: Record<string, string | number | string[]>
	) => Promise<void>;
	let loading = true;
	let currentlyViewed: {
		id: number;
		values: Record<string, string | number | string[]>;
	} | null = null;
	let items: itemType[];

	//Form validation

	type FormValidation = null | false | true;

	let formValidation: {
		nameMin3: FormValidation;
		nameValid: FormValidation;
		latitudeValid: FormValidation;
		longitudeValid: FormValidation;
		featuresValid: FormValidation;
		locationValid: FormValidation;
	} = {
		nameMin3: null,
		nameValid: null,
		latitudeValid: null,
		longitudeValid: null,
		featuresValid: null,
		locationValid: null
	};

	const nameRegex = /^[a-z0-9 ]+$/i;

	const validateData = (): boolean => {
		let isOk = true;

		if (poi.name.length < 3) {
			isOk = false;
			formValidation.nameMin3 = false;
		}

		if (!nameRegex.test(poi.name)) {
			isOk = false;
			formValidation.nameValid = false;
		}

		if (poi.features.length == 0) {
			isOk = false;
			formValidation.featuresValid = false;
		}

		if (isNaN(poi.latitude) || poi.latitude <= -90 || poi.latitude >= 90 || poi.latitude == null) {
			isOk = false;
			formValidation.latitudeValid = false;
		}

		if (
			isNaN(poi.longitude) ||
			poi.longitude <= -180 ||
			poi.longitude >= 180 ||
			poi.longitude == null
		) {
			isOk = false;
			formValidation.longitudeValid = false;
		}

		if (poi.location == null || poi.location == '') {
			isOk = false;
			formValidation.locationValid = false;
		}

		return isOk;
	};

	$: {
		if (formValidation.nameMin3 !== null) {
			formValidation.nameMin3 = poi.name.length >= 3;
		}

		if (formValidation.nameValid !== null) {
			formValidation.nameValid = nameRegex.test(poi.name);
		}

		if (formValidation.featuresValid !== null) {
			formValidation.featuresValid = poi.features.length != 0;
		}

		if (formValidation.latitudeValid !== null) {
			formValidation.latitudeValid =
				!isNaN(poi.latitude) && poi.latitude >= -90 && poi.latitude <= 90 && poi.latitude != null;
		}

		if (formValidation.longitudeValid !== null) {
			formValidation.longitudeValid =
				!isNaN(poi.longitude) &&
				poi.longitude >= -180 &&
				poi.longitude <= 180 &&
				poi.longitude != null;
		}

		if (formValidation.locationValid !== null) {
			formValidation.locationValid = poi.location != '' && poi.location != null;
		}
	}

	let creatingNewPoi = false;

	let poi = {
		name: '',
		description: '',
		features: [''],
		location: '',
		latitude: 0,
		longitude: 0,
		likes: 0
	};
	let features = [''];

	function addFeature() {
		//features.push('');
		features = [...features, ''];
	}

	const createNewPoi = () => {
		creatingNewPoi = true;
		currentlyViewed = null;
		editing = false;
	};

	let editing = false;

	function resetPoi() {
		poi = {
			name: '',
			description: '',
			features: [''],
			location: '',
			latitude: 0,
			longitude: 0,
			likes: 0
		};
		features = [''];
	}
	function startEditing() {
		editing = true;
	}

	function stopEditing() {
		editing = false;
		refreshCurrentlyViewedData();
	}

	const refreshCurrentlyViewedData = async () => {
		if (currentlyViewed === null) {
			return;
		}

		loading = true;
		const itemId = currentlyViewed.id;

		const latestData = await getItemsAction();
		const latestCurrentlyViewedData = latestData.find(({ id }) => id === itemId);

		if (latestCurrentlyViewedData !== undefined) {
			currentlyViewed.values = removeIdFromItem(latestCurrentlyViewedData);
		}
		loading = false;
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

	$: {
		if (!creatingNewPoi) {
			features = [''];
		}
	}
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
		<div
			class="relative card h-full w-full md:w-3/4 max-w-3xl md:max-h-[32rem] max-h-none flex bg-base-200 shadow-xl p-6 flex-col"
		>
			<div class="flex justify-center">
				<h2>POI Details</h2>
				{#if !editing}
					<button class="btn btn-primary" on:click={startEditing}>Edit</button>
				{/if}
			</div>

			<div class="divider my-2" />
			{#if editing}
				<form
					class="flex flex-col grow"
					on:submit|preventDefault={() => {
						if (currentlyViewed) {
							editAction(currentlyViewed.id, currentlyViewed.values);
						}
						stopEditing();
						return false;
					}}
				>
					<label>
						<span>Name</span>
						<input
							type="text"
							bind:value={currentlyViewed.values.name}
							class="input input-bordered"
						/>
					</label>
					<label>
						<span>Description</span>
						<input
							type="text"
							bind:value={currentlyViewed.values.description}
							class="input input-bordered"
						/>
					</label>
					{#if Array.isArray(currentlyViewed.values.features)}
						{#each currentlyViewed.values.features as feature, i}
							<label class="flex flex-col space-y-1">
								<span>Feature {i + 1}</span>
								<div class="flex gap-2">
									<input type="text" bind:value={feature} class="input input-bordered grow" />
									{#if currentlyViewed.values.features.length > 1}
										<button
											type="button"
											class="btn btn-error"
											on:click={() => {
												if (Array.isArray(currentlyViewed?.values.features)) {
													currentlyViewed.values.features.splice(i, 1);
													currentlyViewed.values.features = currentlyViewed.values.features;
												}
											}}>Delete</button
										>
									{/if}
								</div>
							</label>
						{/each}
					{/if}
					<button
						type="button"
						on:click={() => {
							if (Array.isArray(currentlyViewed?.values.features)) {
								currentlyViewed.values.features = [...currentlyViewed.values.features, ''];
							}
						}}
						class="btn btn-primary w-auto">Add Feature</button
					>
					<label>
						<span>Location</span>
						<input
							type="text"
							bind:value={currentlyViewed.values.location}
							class="input input-bordered"
						/>
					</label>
					<label>
						<span>Latitude</span>
						<input
							type="number"
							bind:value={currentlyViewed.values.latitude}
							class="input input-bordered"
						/>
					</label>
					<label>
						<span>Longitude</span>
						<input
							type="number"
							bind:value={currentlyViewed.values.longitude}
							class="input input-bordered"
						/>
					</label>
					<button type="submit" class="btn btn-primary mt-4">Save</button>
				</form>
				<button type="button" class="btn btn-error" on:click={stopEditing}>Back</button>
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
							{#if Array.isArray(currentlyViewed.values.features)}
								{#each currentlyViewed.values.features as feature, i}
									<label class="flex flex-col space-y-1">
										<div class="flex gap-2 items-center">
											<p class="text-xs">Feature {i + 1}:</p>
											<input value={feature} readonly class="input input-bordered grow" />
										</div>
									</label>
								{/each}
							{/if}
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
						<button
							class="btn"
							on:click={() => {
								currentlyViewed = null;
								updateTableUiState();
							}}>Back</button
						>
						<button
							class="btn btn-error"
							on:click={() => {
								if (currentlyViewed !== null) {
									deleteAction(currentlyViewed.id);
									currentlyViewed = null;
									updateTableUiState();
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
			<form
				class="flex flex-col grow space-y-4"
				on:submit|preventDefault={() => {
					poi.features = features;
					if (!validateData()) {
						return false;
					} else {
						createAction(poi);
						creatingNewPoi = false;
						resetPoi();
						updateTableUiState();
						return false;
					}
				}}
			>
				<label class="flex flex-col space-y-1">
					<span>Name</span>
					<input
						type="text"
						bind:value={poi.name}
						on:input={() => {
							if (formValidation.nameValid === null) {
								formValidation.nameValid = false;
							}
							if (formValidation.nameMin3 === null) {
								formValidation.nameMin3 = false;
							}
						}}
						class="input input-bordered text-lg p-2"
					/>
				</label>
				<label class="flex flex-col space-y-1">
					<span>Description</span>
					<textarea bind:value={poi.description} class="input input-bordered" />
				</label>
				{#each features as feature, i}
					<label class="flex flex-col space-y-1">
						<span>Feature {i + 1}</span>
						<div class="flex gap-2">
							<input type="text" bind:value={feature} class="input input-bordered grow" />
							{#if features.length > 1}
								<button
									type="button"
									class="btn btn-error"
									on:click={() => {
										features.splice(i, 1);
										features = features;
									}}>Delete</button
								>
							{/if}
						</div>
					</label>
				{/each}
				<button type="button" on:click={addFeature} class="btn btn-primary w-auto"
					>Add Feature</button
				>
				<label class="flex flex-col space-y-1">
					<span>Location</span>
					<input
						type="text"
						bind:value={poi.location}
						on:input={() => {
							if (formValidation.locationValid === null) {
								formValidation.locationValid = false;
							}
						}}
						class="input input-bordered"
					/>
				</label>
				<label class="flex flex-col space-y-1">
					<span>Latitude</span>
					<input
						type="number"
						bind:value={poi.latitude}
						on:input={() => {
							if (formValidation.latitudeValid === null) {
								formValidation.latitudeValid = false;
							}
						}}
						class="input input-bordered"
					/>
				</label>
				<label class="flex flex-col space-y-1">
					<span>Longitude</span>
					<input
						type="number"
						bind:value={poi.longitude}
						on:input={() => {
							if (formValidation.longitudeValid === null) {
								formValidation.longitudeValid = false;
							}
						}}
						class="input input-bordered"
					/>
				</label>
				<button type="submit" class="btn btn-primary mt-4">Create</button>
				<button
					type="button"
					class="btn btn-error"
					on:click={() => {
						creatingNewPoi = false;
						editing = false;
						updateTableUiState();
					}}>Back</button
				>
				{#if formValidation.nameValid !== null}
					<div class="divider my-1" />
				{/if}
				{#if formValidation.nameValid === false || formValidation.nameMin3 === false}
					<div class="flex">
						<Icon icon={errorIcon} height={24} class="scale-125" color="oklch(var(--er))" />
						<p class="ml-3">Name Not Valid</p>
					</div>
				{:else if formValidation.nameValid === true && formValidation.nameMin3 === true}
					<div class="flex">
						<Icon icon={validIcon} height={24} class="scale-125" color="oklch(var(--su))" />
						<p class="ml-3">Name Valid</p>
					</div>
				{/if}
				{#if formValidation.featuresValid === false}
					<div class="flex">
						<Icon icon={errorIcon} height={24} class="scale-125" color="oklch(var(--er))" />
						<p class="ml-3">Features not Valid</p>
					</div>
				{:else if formValidation.featuresValid === true}
					<div class="flex">
						<Icon icon={validIcon} height={24} class="scale-125" color="oklch(var(--su))" />
						<p class="ml-3">Features Valid</p>
					</div>
				{/if}
				{#if formValidation.latitudeValid === false}
					<div class="flex">
						<Icon icon={errorIcon} height={24} class="scale-125" color="oklch(var(--er))" />
						<p class="ml-3">Latitude not Valid</p>
					</div>
				{:else if formValidation.latitudeValid === true}
					<div class="flex">
						<Icon icon={validIcon} height={24} class="scale-125" color="oklch(var(--su))" />
						<p class="ml-3">Latitude Valid</p>
					</div>
				{/if}
				{#if formValidation.longitudeValid === false}
					<div class="flex">
						<Icon icon={errorIcon} height={24} class="scale-125" color="oklch(var(--er))" />
						<p class="ml-3">Longitude not Valid</p>
					</div>
				{:else if formValidation.longitudeValid === true}
					<div class="flex">
						<Icon icon={validIcon} height={24} class="scale-125" color="oklch(var(--su))" />
						<p class="ml-3">Longitude Valid</p>
					</div>
				{/if}
				{#if formValidation.locationValid === false}
					<div class="flex">
						<Icon icon={errorIcon} height={24} class="scale-125" color="oklch(var(--er))" />
						<p class="ml-3">Location not Valid</p>
					</div>
				{:else if formValidation.locationValid === true}
					<div class="flex">
						<Icon icon={validIcon} height={24} class="scale-125" color="oklch(var(--su))" />
						<p class="ml-3">Location Valid</p>
					</div>
				{/if}
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
