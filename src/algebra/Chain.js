/**
 * Pairs a function to the associated key as defined by the fantasyland spec
 * (and standard convention) and returns it. This algebraic morphism may then be
 * used by any Category. If a function is not provided, the default morphic
 * relationship, as defined by the spec will be used.
 * 
 * @param {Function} map The function to pair. Must have the following signature:
 * (context, value) => f => code
 * @param {string} key The key to associate the algebraic function to. Default
 * value is 'map'.
 * 
 * @todo The exportation is the same every time for all Algebraics:
 *     1. The new Type starts as a new object
 *     2. Add an 'of' method that acts as the constructor
 *			a. During instantiation, 'of' binds the algebrae with the value
 */
import { Functor } from './';

const getChainKey = (chain = Chain.basic, key = 'chain') =>
	({ [key]: chain });

const Chain = {
	[Symbol.hasInstance]: (o) => {
		if (o instanceof Functor)
			if ('function' === typeof o['chain'])
				return true;
		return false;
	},
	alias: ['bind', 'flatMap'],
	basic: () => getChainKey((me, x) => f => f(x)),
	custom: (f) => getChainKey(f)
}


export { Chain };

