// place files you want to import through the `$lib` alias in this folder.
import { env } from '$env/dynamic/public';
import { PUBLIC_RAILS_DEVELOPMENT_URL } from '$env/static/public';

export const devModeUrlFix = (url: string) =>
	env.PUBLIC_NODE_ENV === 'dev' ? PUBLIC_RAILS_DEVELOPMENT_URL + url : url;
