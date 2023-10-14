<script lang="ts">
	import AnimatedBusinessName from '$lib/components/landing/home/AnimatedBusinessName.svelte';
</script>

<div
	class="flex flex-col h-full items-center justify-center relative select-none background-image"
	id="home"
>
	<AnimatedBusinessName />
</div>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}

	.background-image::before {
		content: '';
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background-color: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(2px);
	}
</style>
