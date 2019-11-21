import * as F from '../lambda';
import * as C from '.';

/** The key name as defined by convention and the spec. */
const KEY = 'chainRec';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(KEY);
let getKey = get(KEY);
let getConstructor = get('constructor');

const { Chain } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const ChainRec = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Chain)
        && ('function' === typeof getKey(o))
        && (getConstructor(o) === getConstructor(getKey(o)(x => x))))
            return true;
        return false;
    },

    from: f => getPair(f),
};


export { ChainRec };