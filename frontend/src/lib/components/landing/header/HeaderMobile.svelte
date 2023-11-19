<script lang="ts">
	import { goto } from '$app/navigation';

	const clickButtonByTitleProperty = (title: string) => {
		const button = document.querySelector(`button[title="${title}"]`) as HTMLButtonElement;
		button?.click();

		const button2 = document.querySelector(`button[title="${title} Slide 1"]`) as HTMLButtonElement;
		button2?.click();
	};
</script>

<div class="navbar bg-base-100 justify-between sm:hidden">
	<div>
		<div class="dropdown">
			<button class="btn btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</button>
			<ul class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<button
						on:click={async () => {
							await goto('/');
							clickButtonByTitleProperty('Home');
						}}>Home</button
					>
				</li>
				<li>
					<button on:click={() => goto('/reviews')}>Reviews</button>
				</li>
				<li>
					<button on:click={() => goto('/questions')}>Questions</button>
				</li>
			</ul>
		</div>
		<h1 class="select-none px-4">Natreon&#8482;</h1>
	</div>
	<a class="btn btn-primary" href="/login">Login</a>
</div>
