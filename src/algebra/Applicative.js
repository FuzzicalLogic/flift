import * as F from '../lambda';
import * as C from '.';

/** The key name as defined by convention and the spec. */
const OF_KEY = 'of';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(OF_KEY);
let getOf = get(OF_KEY);
let getConstructor = get('constructor');

const { Apply } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Applicative = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Apply)
        && ('function' === typeof getOf(o))
        && (getConstructor(o) === getConstructor(getOf(o)(x => x))))
            return true;
        return false;
    },

    basic: () => getPair((_, me) => a => me.constructor(a)),
};


export { Applicative };