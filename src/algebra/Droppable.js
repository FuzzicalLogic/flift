import * as F from '../lambda';

/** The key name as defined by convention and the spec. */
const DROP_KEY = 'map';

const { curry, get, oo: { pair } } = F;
let getPair = curry(pair)(DROP_KEY);
let getDrop = get(DROP_KEY);

const Droppable = {
	[Symbol.hasInstance]: (o) => {
		if ('function' === typeof getDrop(o))
			return true;
		return false;
	},
    alias: ['cata', 'fold'],
	basic: () => getPair((me, x) => f => f(x)),
    custom: f => getPair(f)
}

export { Droppable };
