import { pipeSync } from '../lambda';

/**
 * Creates a new Functor Type from a function. A Functor is the most basic of
 * the algebrae and when mapped will automatically recontextualize the result
 * to a new instance of the Type.
 * 
 * @param {any} fMap The function that is used to map any function to the value.
 */
export const Semigroup = (concat) => {
	let algebra = {
		concat: concat
	}
	let exported = x => ({
		concat: pipeSync(algebra.concat(x), exported)
	});
	exported.algebra = algebra;
	return exported;
};
