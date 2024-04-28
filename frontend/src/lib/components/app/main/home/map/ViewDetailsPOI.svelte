<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { POIType, type POI } from './Map.svelte';
	import { Button } from '$lib/components/ui/button';
	import { isRight } from 'fp-ts/lib/Either';
	import { toast } from 'svelte-sonner';
	import { inProgressBadges } from '$lib/stores';

	// Define props with type annotations
	export let poi: POI;
	const { id, name, description, features } = poi;
	let { comments } = poi;
	export let userNickname: string;
	export let onClose: () => void;
	export let refreshPOIs: () => void;

	let newComment = '';
	let selectedFile: File | undefined;

	// Function to add a new comment
	function addComment() {
		console.log('NIckname is ' + userNickname);
		if (newComment.trim() !== '') {
			comments = [...comments, { text: newComment.trim(), nickname: userNickname }];
			newComment = ''; // Clear the input field after adding comment
		}
	}

	async function handleUpload() {
		if (selectedFile) {
			const formData = new FormData();
			formData.append('picture', selectedFile);
			formData.append('poi_id', String(poi.id));
			try {
				const response = await fetch('/api/poi/poi-image/upload', {
					method: 'POST',
					body: formData
				});
				// Check response status and handle accordingly
				if (response.ok) {
					// Handle successful upload
					syncPOIPictures(poi.id);
					toast.success('Successfully added picture for POI!');
					inProgressBadges.checkForUpdates();
					onClose();
				} else {
					// Handle HTTP error
				}
			} catch (error) {
				console.error('Error uploading file:', error);
				// Handle fetch error
			}
		}
	}

	const VALID_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
	function selectFile(event: Event) {
		const input = event.target as HTMLInputElement;
		if (
			input &&
			input.files &&
			input.files.length > 0 &&
			VALID_TYPES.includes(input.files[0].type)
		) {
			selectedFile = input.files[0];
		} else {
			selectedFile = undefined;
		}
	}

	const syncPOIPictures = async (poiId: number) => {
		const params = new URLSearchParams({ id: poiId.toString() });

		const response = await fetch(`/api/poi/get-by-id?${params.toString()}`);

		if (response.ok) {
			const data = await response.json();

			const validationResult = POIType.decode(data);
			if (isRight(validationResult)) {
				const updatedPOI: POI = validationResult.right;
				poi.pictures = updatedPOI.pictures;
				refreshPOIs();
			} else {
				console.error('Invalid POI object received from API: ', validationResult.left);
			}
		}
	};

	function reportComment(comment: string): any {
		throw new Error('Function not implemented.');
	}
</script>

<Dialog.Root open={true} onOpenChange={(newOpenValue) => newOpenValue || onClose()}>
	<Dialog.Content>
		<!-- Display the details using the props -->
		<div>
			<h2>{name}</h2>
			<p>ID: {id}</p>
			<p>Description: {description}</p>
			<p>Features:</p>
			<ul>
				{#each features as feature}
					<li>{feature}</li>
				{/each}
			</ul>

			<!-- Comments container with separate scroll -->
			<div class="comment-container">
				<h3>Comments</h3>
				<div class="comments-scroll">
					{#each comments as comment}
						<div class="comment-wrapper">
							<div class="comment">{comment}</div>
							<button class="report-button" on:click={() => reportComment(comment.text)}
								>Report</button
							>
						</div>
					{/each}
				</div>

				<!-- Textarea for user to input comments -->
				<textarea
					class="comment-input"
					bind:value={newComment}
					placeholder="Type your comment here..."
				/>
				<button on:click={addComment}>Add Comment</button>
			</div>
		</div>

		<div class="mb-4 text-white rounded shadow-md mt-6 w-full md:w-3/4 lg:w-1/2">
			<div class="mb-4">
				<label for="poi-picture">Upload a picture of this location!</label>
				<input
					id="poi-picture"
					type="file"
					accept="image/png, image/jpg, image/jpeg"
					on:change={selectFile}
					class="mt-1 block w-full rounded-md text-white shadow-sm focus:border-green-300"
				/>
			</div>

			<Button variant="secondary" class="mt-4" on:click={handleUpload}>Upload Picture</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>

<style>
	/* Add some styling to center the details and add a border */
	.details-container {
		position: fixed;
		top: 50%;
		left: 40%;
		transform: translate(-50%, -50%);
		background-color: rgb(16, 16, 16);
		padding: 20px;
		border: 2px solid #ccc;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 999; /* Ensure the details appear on top of other content */
		color: white;
		max-width: 400px;
		width: 200%;
	}

	.comment-container {
		margin-top: 20px;
	}

	.comments-scroll {
		max-height: 200px; /* Adjust the height as needed */
		overflow-y: auto; /* Enable vertical scrolling */
	}

	.comment-wrapper {
		display: flex;
		align-items: center;
	}

	.comment {
		flex: 1;
		background-color: #333;
		padding: 10px;
		border-radius: 8px;
		margin-bottom: 10px;
	}

	.report-button {
		margin-left: 10px;
		padding: 8px 12px;
		background-color: #f44336;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.report-button:hover {
		background-color: #d32f2f;
	}

	h2 {
		margin-top: 0;
	}

	ul {
		padding-left: 20px;
	}
</style>