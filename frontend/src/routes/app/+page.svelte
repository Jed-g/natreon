<script lang="ts">
	import { logOut } from '$lib/auth';
	import { authenticated } from '$lib/stores';

	const handleLogout = async () => {
		const logoutSuccessful = await logOut();
		logoutSuccessful && authenticated.verify();
	};
</script>

<div class="flex flex-col grow items-center justify-center">
	<button class="btn" on:click={handleLogout}>Logout</button>
</div>
