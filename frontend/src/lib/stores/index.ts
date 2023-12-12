import { writable } from 'svelte/store';
import { authenticationStatus } from '$lib/auth';
import type UserType from '$lib/enums/userType';

const createAuthenticatedStore = () => {
	const { subscribe, set } = writable<null | boolean | UserType>(null);

	return {
		subscribe,
		verify: async () => set(await authenticationStatus())
	};
};
export const authenticated = createAuthenticatedStore();

export const newLandingPageVisitRegisteredPromise = writable<Promise<void>>(new Promise(() => {}));

export const pathToRegistrationAppendCurrentCallStack = writable<Promise<void>>(
	new Promise((resolve) => resolve())
);
