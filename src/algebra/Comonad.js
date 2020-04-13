import * as F from '../lambda';
import * as C from '.';

/** The key name as defined by convention and the spec. */
const KEY = 'extract';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(KEY);
let getKey = get(KEY);

const { Extend } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Comonad = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Extend)
        && ('function' === typeof getKey(o)))
            return true;
        return false;
    },
    from: f => getPair(f)
};


export { Comonad };