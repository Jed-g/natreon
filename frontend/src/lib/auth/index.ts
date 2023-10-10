import { devModeUrlFix, devMode, devModeAuthorizationHeader } from '$lib/utils';

export const isAuthenticated = async () => {
	try {
		const response = await fetch(devModeUrlFix('/api/auth/status'), devModeAuthorizationHeader());
		return response.status === 200;
	} catch (error) {
		return false;
	}
};

export const logIn = async (email: string, password: string) => {
	try {
		const response = await fetch(devModeUrlFix('/api/auth/login'), {
			method: 'POST',
			body: JSON.stringify({ user: { email, password } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const responseOk = response.status === 200;
		responseOk &&
			devMode() &&
			localStorage.setItem('AuthorizationToken', response.headers.get('Authorization')!);
		return responseOk;
	} catch (error) {
		return false;
	}
};

export const signUp = async (email: string, password: string) => {
	try {
		const response = await fetch(devModeUrlFix('/api/auth/signup'), {
			method: 'POST',
			body: JSON.stringify({ user: { email, password } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const responseOk = response.status === 200;
		responseOk &&
			devMode() &&
			localStorage.setItem('AuthorizationToken', response.headers.get('Authorization')!);
		return responseOk;
	} catch (error) {
		return false;
	}
};

export const logOut = async () => {
	try {
		const response = await fetch(devModeUrlFix('/api/auth/logout'), {
			method: 'DELETE',
			...devModeAuthorizationHeader()
		});
		const responseOk = response.status === 200;
		responseOk && devMode() && localStorage.removeItem('AuthorizationToken');
		return responseOk;
	} catch (error) {
		return false;
	}
};
