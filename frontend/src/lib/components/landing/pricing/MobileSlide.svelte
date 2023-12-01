<!--<div
	class="flex flex-col h-full items-center justify-center relative select-none background-image"
	id="home"
>
</div>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}
</style>-->
<script lang="ts">
	import MarketplaceImg from '$lib/components/landing/pricing/marketplace-pricing.png';
	import POIPricingImg from '$lib/components/landing/pricing/poi-pricing.png';
	import TrustPricingImg from '$lib/components/landing/pricing/trust-pricing.png';
</script>

<div class="flex flex-col h-full items-center relative select-none background-image" id="home">
	<div class="w-5/6 py-10">
		<div class="grid grid-rows-4 grid-cols-3 gap-3">
			<img src={MarketplaceImg} alt="download icon" class="rounded-3xl" />
			<img src={POIPricingImg} alt="download icon" class="rounded-3xl" />
			<img src={TrustPricingImg} alt="download icon" class="rounded-3xl" />
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="collapse bg-base-200" on:click={(e) => console.log('MapFeatureClick', e)}>
					<input type="checkbox" />
					<div class="collapse-title text-xl font-medium">Affiliate marketplace</div>
					<div class="collapse-content">
						<p>Affiliate marketplace</p>
						<div class="flex items-center justify-center space-x-4 py-5">
							<button class="btn btn-primary">Email</button>
							<button class="btn btn-secondary">Social Media</button>
						</div>
					</div>
				</div>
				<div>
					<form>
						<label for="donation" class="text-white mb-2">Donate:</label>
						<div class="flex items-center space-x-1 mb-2">
							<span class="text-white">£</span>
							<input
								type="number"
								id="donationAmount"
								name="donationAmount"
								class="border rounded-md p-2 w-20"
								readonly
								value="5"
							/>
						</div>

						<button class="btn btn-primary">Donate</button>
					</form>
				</div>
			</div>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="collapse bg-base-200" on:click={(e) => console.log('POIFeatureClick', e)}>
					<input type="checkbox" />
					<div class="collapse-title text-xl font-medium">Sponsored Activities</div>
					<div class="collapse-content">
						<p>Sponsored POIS</p>
						<div class="flex items-center justify-center space-x-4 py-5">
							<button class="btn btn-primary">Email</button>
							<button class="btn btn-secondary">Social Media</button>
						</div>
					</div>
				</div>
				<div>
					<form>
						<label for="donation" class="text-white mb-2">Donate:</label>
						<div class="flex items-center space-x-1 mb-2">
							<span class="text-white">£</span>
							<input
								type="number"
								id="donationAmount"
								name="donationAmount"
								class="border rounded-md p-2 w-20"
								readonly
								value="10"
							/>
						</div>

						<button class="btn btn-primary">Donate</button>
					</form>
				</div>
			</div>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="collapse bg-base-200" on:click={(e) => console.log('SocialFeatureClick', e)}>
					<input type="checkbox" />
					<div class="collapse-title text-xl font-medium">Government Trusts</div>
					<div class="collapse-content">
						<p>Partially funded by Government trusts</p>
						<div class="flex items-center justify-center space-x-4 py-5">
							<button class="btn btn-primary">Email</button>
							<button class="btn btn-secondary">Social Media</button>
						</div>
					</div>
				</div>
				<div>
					<form>
						<label for="donation" class="text-white mb-2">Donate:</label>
						<div class="flex items-center space-x-1 mb-2">
							<span class="text-white">£</span>
							<input
								type="number"
								id="donationAmount"
								name="donationAmount"
								class="border rounded-md p-2 w-20"
								readonly
								value="15"
							/>
						</div>

						<button class="btn btn-primary">Donate</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.background-image {
		background-image: url('/nature.jpg');
		background-size: cover;
	}
</style>
