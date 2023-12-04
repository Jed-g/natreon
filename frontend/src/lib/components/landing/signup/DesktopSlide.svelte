<script lang="ts">
	let email = '';
	const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

	const validateEmail = (): boolean => {
		return EMAIL_REGEX.test(email)
	};

	let isError = false;
	const handleSubmit = async () => {

		if (!validateEmail()) {
			alert("Please enter a valid email address")
			isError = true;
			return;
		}

		const response = await fetch('/api/mailinglist', {
			method: 'POST',
			body: JSON.stringify({
				email: email
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			isError = true;
			const responsedata = await response.json();
			alert(responsedata.message);
			return;
		}
	};
</script>

<div
	class="flex flex-col h-full items-center justify-center relative select-none background-image"
	id="home"
>
	<div class="hero">
		<div class="hero-content text-center">
			<div class="max-w-2xl">
				<h1 class="text-5xl font-bold">Register your interest here!</h1>
				<p class="py-6">
					Be among the first to experience our solution and keep up to date with our progress by
					filling in your email below!
				</p>
				<input
					bind:value={email}
					type="text"
					placeholder="Your email Here"
					class="input input-bordered w-full mb-3"
				/>
				<button on:click={handleSubmit} class="btn btn-primary">Register My Interest!</button>
			</div>
		</div>
	</div>
</div>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}
</style>
