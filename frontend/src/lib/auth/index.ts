export const isAuthenticated = async () => {
	try {
		const response = await fetch('/api/auth/status');
		return response.status === 200;
	} catch (error) {
		return false;
	}
};

export const logIn = async (email: string, password: string) => {
	try {
		const response = await fetch('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ user: { email, password } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.status === 200;
	} catch (error) {
		return false;
	}
};

export const signUp = async (email: string, password: string) => {
	try {
		const response = await fetch('/api/auth/signup', {
			method: 'POST',
			body: JSON.stringify({ user: { email, password } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.status === 200;
	} catch (error) {
		return false;
	}
};

export const logOut = async () => {
	try {
		const response = await fetch('/api/auth/logout', {
			method: 'DELETE'
		});
		return response.status === 200;
	} catch (error) {
		return false;
	}
};
