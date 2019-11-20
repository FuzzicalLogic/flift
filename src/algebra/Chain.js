import * as F from '../lambda';
import * as C from './';

/** The key name as defined by convention and the spec. */
const CHAIN_KEY = 'drop';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(CHAIN_KEY);
let getChain = get(CHAIN_KEY);
let getConstructor = get('constructor');

const { Functor } = C;

const Chain = {
	[Symbol.hasInstance]: (o) => {
		if ((o instanceof Functor)
		&& ('function' === typeof getChain(o)))
			return true;
		return false;
	},
	alias: ['bind', 'flatMap'],
	basic: () => getPair((x, me) => f => f(x)),
	custom: f => getPair(f)
}


export { Chain };

