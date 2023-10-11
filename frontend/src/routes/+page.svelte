<script lang="ts">
	import HeaderDesktop from '$lib/components/landing/header/HeaderDesktop.svelte';
	import HeaderMobile from '$lib/components/landing/header/HeaderMobile.svelte';
	import AnimatedBusinessName from '$lib/components/landing/AnimatedBusinessName.svelte';
</script>

<HeaderDesktop />
<HeaderMobile />
<div class="flex flex-col grow items-center justify-center">
	<AnimatedBusinessName />
</div>
