<script lang="ts">
	import { goto } from '$app/navigation';

	const clickButtonByTitleProperty = (title: string) => {
		const button = document.querySelector(`button[title="${title}"]`) as HTMLButtonElement;
		button?.click();

		const button2 = document.querySelector(`button[title="${title} Slide 1"]`) as HTMLButtonElement;
		button2?.click();
	};
</script>

<div class="navbar bg-base-100 justify-between hidden sm:flex">
	<h1 class="select-none px-4">Natreon&#8482;</h1>

	<ul class="menu menu-horizontal px-1">
		<li class="mx-1">
			<button
				on:click={async () => {
					await goto('/');
					clickButtonByTitleProperty('Home');
				}}>Home</button
			>
		</li>
		<li class="mx-1">
			<button
				on:click={async () => {
					await goto('/');
					clickButtonByTitleProperty('Features');
				}}>Features</button
			>
		</li>
		<li class="mx-1">
			<button
				on:click={async () => {
					await goto('/');
					clickButtonByTitleProperty('Pricing');
				}}>Pricing</button
			>
		</li>
		<li class="mx-1">
			<button
				on:click={async () => {
					await goto('/');
					clickButtonByTitleProperty('About Us');
				}}>About Us</button
			>
		</li>
	</ul>

	<a class="btn" href="/login">Login</a>
</div>
