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
	function handleDonateClick() {
    window.alert("We appreciate your willingness to donate! Unfortunately this feature is not yet implemented.");
  }
  </script>
  
  <div class="flex flex-col items-center relative select-none background-image" id="home">
	<div class="w-full sm:w-5/6 p-4">
	  <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-grey text-center">
		How will we fund our operations?
	  </h2>
	  <p class="text-lg text-white text-center mb-4">
		Explore our funding sources below and consider supporting us through donations. Donations at
		this stage are greatly appreciated but not necessary.
	  </p>
  
	  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="w-full">
		  <img src={MarketplaceImg} alt="Marketplace icon" class="rounded-3xl mb-2" />
		  <div class="collapse bg-base-200" on:click={(e) => console.log('AffiliatePricingClick', e)}>
			<input type="checkbox" />
			<div class="collapse-title text-xl sm:text-2xl font-medium">Affiliate Marketplace</div>
			<div class="collapse-content">
			  <p>
				A Marketplace for affiliate companies to sell their products. We will prioritize
				companies which are pro-environmental. For every product sold on our platform, we will take a percentage of the sale.
			  </p>
			</div>
		  </div>
		  <form>
			<button class="btn btn-primary" on:click={handleDonateClick}>Donate £5</button>
		  </form>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="w-full">
		  <img src={POIPricingImg} alt="POI icon" class="rounded-3xl mb-2" />
		  <div class="collapse bg-base-200" on:click={(e) => console.log('ActivitiesPricingClick', e)}>
			<input type="checkbox" />
			<div class="collapse-title text-xl sm:text-2xl font-medium">Sponsored Activities</div>
			<div class="collapse-content">
			  <p>
				Activities will appear on our in-app map, sponsored by local companies. This will
				provide an opportunity for local companies to attract pro-environment-minded
				customers, as well as creating a revenue stream for our product.
			  </p>
			</div>
		  </div>
		  <form>
			<button class="btn btn-primary" on:click={handleDonateClick}>Donate £10</button>
		  </form>
		</div>
		
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="w-full">
		  <img src={TrustPricingImg} alt="Trust icon" class="rounded-3xl mb-2" />
		  <div class="collapse bg-base-200" on:click={(e) => console.log('TrustsPricingClick', e)}>
			<input type="checkbox" />
			<div class="collapse-title text-xl sm:text-2xl font-medium">Government Trusts</div>
			<div class="collapse-content">
			  <p>
				Our content will be supported through funds from government trusts, with a partnership
				with the National Trust being a potential possibility.
			  </p>
			</div>
		  </div>
		  <form>
			<button class="btn btn-primary" on:click={handleDonateClick}>Donate £15</button>
		  </form>
		</div>
	  </div>
	</div>
  </div>
  
  <style>
	.background-image {
	  background-image: url('/nature.jpg');
	  background-size: cover;
	}
	.btn {
	margin: 1rem auto;
    padding: 10px 20px;
    font-size: 16px;
    max-width: 100%;
    width: auto;
    box-sizing: border-box;
    display: block; 
	}
  </style>