<script lang="ts">
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import HomeFirstSlide from '$lib/components/landing/home/FirstSlide.svelte';
	import FeaturesFirstSlide from '$lib/components/landing/features/FirstSlide.svelte';
	import FeaturesSecondSlide from '$lib/components/landing/features/SecondSlide.svelte';
	import PricingFirstSlide from '$lib/components/landing/pricing/FirstSlide.svelte';
	import AboutUsFirstSlide from '$lib/components/landing/about/FirstSlide.svelte';
</script>

<div class="grow">
	<Fullpage>
		<FullpageSection disableCentering title="Home">
			<HomeFirstSlide />
		</FullpageSection>
		<FullpageSection disableCentering title="Features">
			<FullpageSlide disableCentering title="Features Slide 1">
				<FeaturesFirstSlide />
			</FullpageSlide>
			<FullpageSlide disableCentering title="Features Slide 2">
				<FeaturesSecondSlide />
			</FullpageSlide>
		</FullpageSection>
		<FullpageSection disableCentering title="Pricing">
			<PricingFirstSlide />
		</FullpageSection>
		<FullpageSection disableCentering title="About Us">
			<AboutUsFirstSlide />
		</FullpageSection>
	</Fullpage>
</div>
