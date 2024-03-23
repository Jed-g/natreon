<script>
	import { goto } from '$app/navigation';
	function goToProfile() {
		goto('/app/profile');
	}
</script>

<button class="btn" on:click={goToProfile}>Go to Profile</button>
