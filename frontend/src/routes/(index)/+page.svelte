<script lang="ts">
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import HomeFirstSlide from '$lib/components/landing/home/FirstSlide.svelte';
	import HomeSecondSlide from '$lib/components/landing/home/SecondSlide.svelte';
	import FeaturesFirstSlide from '$lib/components/landing/features/FirstSlide.svelte';
	import PricingFirstSlide from '$lib/components/landing/pricing/FirstSlide.svelte';
	import AboutUsFirstSlide from '$lib/components/landing/about/FirstSlide.svelte';
</script>

<div class="grow">
	<Fullpage>
		<FullpageSection disableCentering title="Home">
			<FullpageSlide disableCentering title="Home Slide 1">
				<HomeFirstSlide />
			</FullpageSlide>
			<FullpageSlide disableCentering title="Home Slide 2">
				<HomeSecondSlide />
			</FullpageSlide>
		</FullpageSection>
		<FullpageSection disableCentering title="Features">
			<FeaturesFirstSlide />
		</FullpageSection>
		<FullpageSection disableCentering title="Pricing">
			<PricingFirstSlide />
		</FullpageSection>
		<FullpageSection disableCentering title="About Us">
			<AboutUsFirstSlide />
		</FullpageSection>
	</Fullpage>
</div>
