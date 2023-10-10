import { writable } from 'svelte/store';
import { isAuthenticated } from '$lib/auth';

const createAuthenticatedStore = () => {
	const { subscribe, set } = writable<null | boolean>(null);

	return {
		subscribe,
		verify: async () => set(await isAuthenticated())
	};
};
export const authenticated = createAuthenticatedStore();
