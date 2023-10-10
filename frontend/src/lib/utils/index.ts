// place files you want to import through the `$lib` alias in this folder.
import { env } from '$env/dynamic/public';
import { PUBLIC_RAILS_DEVELOPMENT_URL } from '$env/static/public';

export const devMode = () => env.PUBLIC_NODE_ENV === 'dev';

export const devModeUrlFix = (url: string) =>
	devMode() ? PUBLIC_RAILS_DEVELOPMENT_URL + url : url;

export const devModeAuthorizationHeader = () =>
	devMode()
		? {
				headers: {
					Authorization: localStorage.getItem('AuthorizationToken')!
				}
		  }
		: undefined;
