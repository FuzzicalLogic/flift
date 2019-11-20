import { reduce } from './reduce';

const fog = async (f, g) => async (...args) => await f(await g(...args));
/**
 * 
 * @param {...Function} fs The functions to compose together
 * @returns {Function} Function that accepts the arguments for the composition
 */
export const compose = (...fs) =>
	async input => await fs.reduceRight(
		async (carry, next) => await next(await carry), await input
	);

const fogSync = (f, g) => (...xs) => f(g(...xs));
/**
 * @param {...Function} fs The functions to run in sequence
 */
export const composeSync = reduce(fogSync);
