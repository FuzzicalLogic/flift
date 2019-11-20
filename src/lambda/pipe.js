
import { reduce } from './reduce';

const gof = async (f, g) => async (...xs) => await g(await f(...xs));
export const pipe = (f, ...fs) =>
	async (...xs) => await fs.reduce(
		async (carry, next) => await next(await carry), await f(...xs)
	);

const gofSync = (f, g) => (...xs) => g(f(...xs));
export const pipeSync = reduce(gofSync);
