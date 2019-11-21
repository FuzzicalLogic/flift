import * as F from '../lambda';
import * as C from '.';

/** The key name as defined by convention and the spec. */
const KEY = 'zero';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(KEY);
let getZero = get(KEY);
let getConstructor = get('constructor');

const { Alt } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Plus = {
    [Symbol.hasInstance]: o => {
        let P = getConstructor(o);
        let f = getZero(P);
        if ((o instanceof Alt)
        && ('function' === typeof f)
        && (P === getConstructor(f())))
            return true;
        return false;
    },
    from: f => getPair(f)
};


export { Plus };