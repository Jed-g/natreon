<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import thumbUpIcon from '@iconify-icons/mdi/thumb-up';
	import thumbDownIcon from '@iconify-icons/mdi/thumb-down';
	import AddReview from '$lib/components/landing/reviews/AddReview.svelte';

	let showAddReview = false;
	let loading = true;
	let reviews: {
		id: number;
		content: string;
		author: string;
		rating: number;
		upvotes: number;
		downvotes: number;
	}[] = [];

	const getAllReviews = async () => {
		const response = await fetch('/api/reviews');
		const data = await response.json();
		return data.reviews;
	};

	const updateReviewsUiState = async () => {
		loading = true;
		reviews = await getAllReviews();
		loading = false;
	};

	onMount(updateReviewsUiState);
</script>

<div class="flex h-full items-center justify-center relative background-image">
	<div class="relative p-6 h-full w-full">
		<div class="card p-6 bg-base-200 flex h-full overflow-x-auto opacity-95">
			{#if loading}
				<div class="grow flex items-center justify-center">
					<span class="loading loading-ring loading-lg" />
				</div>
			{:else}
				<div class="flex justify-between items-center">
					<h1 class="text-xl">Reviews</h1>
					<div class="join hidden md:inline-flex">
						<div>
							<input class="input input-bordered join-item" placeholder="Search" />
						</div>
						<select class="select select-bordered join-item">
							<option disabled selected>Order By</option>
							<option>Rating</option>
							<option>Recency</option>
							<option>Usefullness</option>
						</select>
						<div class="indicator">
							<button class="btn join-item btn-primary" on:click={() => (showAddReview = true)}
								>Add Review</button
							>
						</div>
					</div>
					<div class="join hidden sm:max-md:inline-flex">
						<select class="select select-bordered join-item">
							<option disabled selected>Order By</option>
							<option>Rating</option>
							<option>Recency</option>
							<option>Usefullness</option>
						</select>
						<div class="indicator">
							<button class="btn join-item btn-primary" on:click={() => (showAddReview = true)}
								>Add Review</button
							>
						</div>
					</div>
					<button class="btn btn-primary sm:hidden" on:click={() => (showAddReview = true)}
						>Add Review</button
					>
				</div>
				<div class="divider" />
				{#if reviews.length > 0}
					{#each reviews as { id, author, content, rating, upvotes, downvotes }, index (id)}
						<div class="card p-4 flex items-center flex-row glass" class:mt-4={index > 0}>
							<div class="sm:inline-flex hidden">
								<div class="rating">
									<input type="radio" class="mask mask-star" disabled checked={rating === 1} />
									<input type="radio" class="mask mask-star" disabled checked={rating === 2} />
									<input type="radio" class="mask mask-star" disabled checked={rating === 3} />
									<input type="radio" class="mask mask-star" disabled checked={rating === 4} />
									<input type="radio" class="mask mask-star" disabled checked={rating === 5} />
								</div>
							</div>
							<p class="sm:hidden w-7 ml-2 text-lg">{rating}/5</p>
							<div class="divider divider-horizontal" />
							<div class="flex flex-col grow">
								<p>{content}</p>
								<div class="flex justify-between items-center pt-4">
									<div class="flex items-center">
										<button class="btn btn-sm btn-circle"
											><Icon icon={thumbUpIcon} height={18} /></button
										>
										<p class="mx-2">{upvotes - downvotes}</p>
										<button class="btn btn-sm btn-circle"
											><Icon icon={thumbDownIcon} height={18} /></button
										>
									</div>
									<p class="my-0 font-semibold">{author}</p>
								</div>
							</div>
						</div>
					{/each}
				{:else}
					<div class="grow flex items-center justify-center">
						<p class="text-lg">No reviews...</p>
					</div>
				{/if}
			{/if}
		</div>
	</div>
	{#if showAddReview}
		<AddReview bind:showAddReview refreshCallback={updateReviewsUiState} />
	{/if}
</div>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}

	.background-image::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(2px);
	}

	/* .container {
		background-image: url('/nature.jpg');
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.container::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(2px);
	} */

	/* @media only screen and (max-device-width: 1366px) {
		.container {
			background-attachment: scroll;
		}
	} */
</style>
