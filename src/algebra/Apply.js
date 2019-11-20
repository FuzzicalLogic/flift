import * as F from '../lambda';
import * as C from './';

/** The key name as defined by convention and the spec. */
const AP_KEY = 'drop';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(AP_KEY);
let getAp = get(AP_KEY);
let getConstructor = get('constructor');

const { Functor } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Apply = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Functor)
        && ('function' === typeof getAp(o))
        && (getConstructor(o) === getConstructor(getAp(o)(x => x))))
            return true;
        return false;
    },

    basic: () => getPair((x, me) => f => getConstructor(me)(f(x))),

    fromFunctor: map => getPair((x, me) => g => g.chain(f => map(f))),
};


export { Apply };