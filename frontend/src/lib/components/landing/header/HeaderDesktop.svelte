<script lang="ts">
	const clickButtonByTitleProperty = (title: string) => {
		const button = document.querySelector(`button[title="${title}"]`) as HTMLButtonElement;
		button.click();

		try {
			const button2 = document.querySelector(
				`button[title="${title} Slide 1"]`
			) as HTMLButtonElement;
			button2.click();
		} catch (error) {}
	};
</script>

<div class="navbar bg-base-100 justify-between hidden sm:flex">
	<h1 class="select-none px-4">Natreon&#8482;</h1>

	<ul class="menu menu-horizontal px-1">
		<li class="mx-1">
			<button on:click={() => clickButtonByTitleProperty('Home')}>Home</button>
		</li>
		<li class="mx-1">
			<button on:click={() => clickButtonByTitleProperty('Features')}>Features</button>
		</li>
		<li class="mx-1">
			<button on:click={() => clickButtonByTitleProperty('Pricing')}>Pricing</button>
		</li>
		<li class="mx-1">
			<button on:click={() => clickButtonByTitleProperty('About Us')}>About Us</button>
		</li>
	</ul>

	<a class="btn" href="/login">Login</a>
</div>
