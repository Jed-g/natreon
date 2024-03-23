<script lang="ts">
	import Map from '$lib/components/app/map/Map.svelte';
	import LogoutButton from '$lib/components/LogoutButton.svelte';
	import GoToProfile from '$lib/components/app/GoToProfile.svelte';
</script>

<Map />
<div class="absolute top-2 left-2 flex flex-col items-start">
	<div class="mb-2">
		<LogoutButton />
	</div>
	<div class="mb-2">
		<GoToProfile />
	</div>
</div>
