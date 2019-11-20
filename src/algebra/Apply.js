import { pipeSync } from '../lambda';
import { Functor } from './Functor';

/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
export const Apply = (g = x => f => f(x)) => {
	let algebra = {
		apply: g,
		map: x => pipeSync(g(x), exported)
	}
	let exported = x => ({
		chain: algebra.chain(x),
		map: algebra.map(x)
	});
	exported.algebra = algebra;
	return exported;
};

/**
 * Creates a Chain from a provided Functor type.
 * 
 * @param {Functor} F
 */
Apply.fromChain = (x, self) => a => a.chain(f => self.map(f));
