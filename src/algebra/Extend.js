import * as F from '../lambda';
import * as C from './';

/** The key name as defined by convention and the spec. */
const KEY = 'extend';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(KEY);
let getExtend = get(KEY);
let getConstructor = get('constructor');

const { Functor } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Extend = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Functor)
        && ('function' === typeof getExtend(o))
        && (getConstructor(o) === getConstructor(getExtend(o)(x => x))))
            return true;
        return false;
    },
    from: f => getPair(f)
};


export { Extend };