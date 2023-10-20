import { describe, it, expect, vi, beforeEach } from 'vitest';
import { signUp, logIn, logOut, isAuthenticated } from '$lib/auth';

const EMAIL = 'test@example.com';
const PASSWORD = 'password';
const mockFetch = vi.fn();

describe('signUp', () => {
	beforeEach(() => {
		global.fetch = mockFetch.mockReset();
	});

	it('returns true when the server responds with 200', async () => {
		mockFetch.mockResolvedValueOnce({ status: 200 });
		const result = await signUp(EMAIL, PASSWORD);
		expect(result).toBe(true);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/signup', {
			method: 'POST',
			body: JSON.stringify({ user: { email: EMAIL, password: PASSWORD } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	});

	it('returns false when the server responds with an error', async () => {
		mockFetch.mockResolvedValueOnce({ status: 500 });
		const result = await signUp(EMAIL, PASSWORD);
		expect(result).toBe(false);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/signup', {
			method: 'POST',
			body: JSON.stringify({ user: { email: EMAIL, password: PASSWORD } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	});

	it('returns false when the server does not respond', async () => {
		mockFetch.mockRejectedValueOnce(new Error('Network error'));
		const result = await signUp(EMAIL, PASSWORD);
		expect(result).toBe(false);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/signup', {
			method: 'POST',
			body: JSON.stringify({ user: { email: EMAIL, password: PASSWORD } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	});
});

describe('logIn', () => {
	beforeEach(() => {
		global.fetch = mockFetch.mockReset();
	});

	it('returns true when the server responds with 200', async () => {
		mockFetch.mockResolvedValueOnce({ status: 200 });
		const result = await logIn(EMAIL, PASSWORD);
		expect(result).toBe(true);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ user: { email: EMAIL, password: PASSWORD } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	});

	it('returns false when the server responds with an error', async () => {
		mockFetch.mockResolvedValueOnce({ status: 500 });
		const result = await logIn(EMAIL, PASSWORD);
		expect(result).toBe(false);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ user: { email: EMAIL, password: PASSWORD } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	});

	it('returns false when the server does not respond', async () => {
		mockFetch.mockRejectedValueOnce(new Error('Network error'));
		const result = await logIn(EMAIL, PASSWORD);
		expect(result).toBe(false);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ user: { email: EMAIL, password: PASSWORD } }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	});
});

describe('logOut', () => {
	beforeEach(() => {
		global.fetch = mockFetch.mockReset();
	});

	it('returns true when the server responds with 200', async () => {
		mockFetch.mockResolvedValueOnce({ status: 200 });
		const result = await logOut();
		expect(result).toBe(true);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/logout', {
			method: 'DELETE'
		});
	});

	it('returns false when the server responds with an error', async () => {
		mockFetch.mockResolvedValueOnce({ status: 500 });
		const result = await logOut();
		expect(result).toBe(false);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/logout', {
			method: 'DELETE'
		});
	});

	it('returns false when the server does not respond', async () => {
		mockFetch.mockRejectedValueOnce(new Error('Network error'));
		const result = await logOut();
		expect(result).toBe(false);
		expect(mockFetch).toHaveBeenCalledWith('/api/auth/logout', {
			method: 'DELETE'
		});
	});
});

describe('isAuthenticated', () => {
	it('returns true if the server responds with a 200 status code', async () => {
		const mockFetch = vi.spyOn(global, 'fetch');
		mockFetch.mockResolvedValueOnce({ status: 200 } as Response);
		const result = await isAuthenticated();
		expect(result).toBe(true);
	});

	it('returns false if the server responds with a 401 status code', async () => {
		const mockFetch = vi.spyOn(global, 'fetch');
		mockFetch.mockResolvedValueOnce({ status: 401 } as Response);
		const result = await isAuthenticated();
		expect(result).toBe(false);
	});

	it('returns false if the fetch function throws an error', async () => {
		const mockFetch = vi.spyOn(global, 'fetch');
		mockFetch.mockRejectedValueOnce(new Error('Network error'));
		const result = await isAuthenticated();
		expect(result).toBe(false);
	});
});
