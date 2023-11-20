<script lang="ts">
	import AdminDashboardUrls from '$lib/enums/adminDashboardUrls';
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	import homeIcon from '@iconify-icons/mdi/home';
	import accountGroupIcon from '@iconify-icons/mdi/account-group';
	import messageDrawIcon from '@iconify-icons/mdi/message-draw';
	import commentQuestionIcon from '@iconify-icons/mdi/comment-question';
	import cardAccountMailIcon from '@iconify-icons/mdi/card-account-mail';

	export let slug: string | undefined;

	const dispatch = createEventDispatcher();
</script>

<ul class="menu menu-lg p-4 min-h-full text-base-content flex-nowrap">
	<li>
		<a
			class:font-semibold={!slug}
			class:active={!slug}
			href={`/admin${AdminDashboardUrls.OVERVIEW ? '/' + AdminDashboardUrls.OVERVIEW : ''}`}
			on:click={() => dispatch('sideMenuItemClicked')}
			><Icon icon={homeIcon} height={24} class="scale-125 mr-2" />Overview</a
		>
	</li>
	<div class="my-1" />
	<li>
		<a
			class:font-semibold={slug === AdminDashboardUrls.USERS}
			class:active={slug === AdminDashboardUrls.USERS}
			href={`/admin${AdminDashboardUrls.USERS ? '/' + AdminDashboardUrls.USERS : ''}`}
			on:click={() => dispatch('sideMenuItemClicked')}
			><Icon icon={accountGroupIcon} height={24} class="scale-125 mr-2" />Users</a
		>
	</li>
	<div class="my-1" />
	<li>
		<a
			class:font-semibold={slug === AdminDashboardUrls.REVIEWS}
			class:active={slug === AdminDashboardUrls.REVIEWS}
			href={`/admin${AdminDashboardUrls.REVIEWS ? '/' + AdminDashboardUrls.REVIEWS : ''}`}
			on:click={() => dispatch('sideMenuItemClicked')}
			><Icon icon={messageDrawIcon} height={24} class="scale-125 mr-2" />Reviews</a
		>
	</li>
	<div class="my-1" />
	<li>
		<a
			class:font-semibold={slug === AdminDashboardUrls.QA}
			class:active={slug === AdminDashboardUrls.QA}
			href={`/admin${AdminDashboardUrls.QA ? '/' + AdminDashboardUrls.QA : ''}`}
			on:click={() => dispatch('sideMenuItemClicked')}
			><Icon icon={commentQuestionIcon} height={24} class="scale-125 mr-2" />QA</a
		>
	</li>
	<div class="my-1" />
	<li>
		<a
			class:font-semibold={slug === AdminDashboardUrls.MAILING_LIST}
			class:active={slug === AdminDashboardUrls.MAILING_LIST}
			href={`/admin${AdminDashboardUrls.MAILING_LIST ? '/' + AdminDashboardUrls.MAILING_LIST : ''}`}
			on:click={() => dispatch('sideMenuItemClicked')}
			><Icon icon={cardAccountMailIcon} height={24} class="scale-125 mr-2" />Mailing List</a
		>
	</li>
</ul>
