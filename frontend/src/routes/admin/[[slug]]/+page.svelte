<script lang="ts">
	import Header from '$lib/components/admin/header/Header.svelte';
	import SideMenu from '$lib/components/admin/sidemenu/SideMenu.svelte';
	import AdminDashboardUrls from '$lib/enums/adminDashboardUrls.js';
	import Overview from '$lib/components/admin/main/Overview.svelte';
	import Users from '$lib/components/admin/main/users/Users.svelte';
	import Reviews from '$lib/components/admin/main/reviews/Reviews.svelte';
	import QA from '$lib/components/admin/main/questions/QA.svelte';
	import MailingList from '$lib/components/admin/main/MailingList.svelte';

	export let data;
	let menuClosed = true;
	let mainComponent: any = null;

	$: {
		switch (data.slug) {
			case AdminDashboardUrls.USERS:
				mainComponent = Users;
				break;
			case AdminDashboardUrls.REVIEWS:
				mainComponent = Reviews;
				break;
			case AdminDashboardUrls.QA:
				mainComponent = QA;
				break;
			case AdminDashboardUrls.MAILING_LIST:
				mainComponent = MailingList;
				break;
			default:
				mainComponent = Overview;
				break;
		}
	}
</script>

<Header bind:menuClosed />
<div class="relative flex grow height">
	<div class="overflow-y-auto">
		<SideMenu bind:menuClosed slug={data.slug} />
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="relative flex grow bg-base-200 md:brightness-100 overflow-x-hidden"
		class:brightness-50={!menuClosed}
		on:click={() => (menuClosed = true)}
	>
		<svelte:component this={mainComponent} />
	</div>
</div>

<style>
	.height {
		height: calc(100% - 64px);
	}
</style>
