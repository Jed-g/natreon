<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div class={cn('space-y-2', className)} {...$$restProps}>
	<slot />
</div>
