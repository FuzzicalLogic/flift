import * as F from '../lambda';
import * as C from '.';

/** The key name as defined by convention and the spec. */
const LTE_KEY = 'ap';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(LTE_KEY);
let getLte = get(LTE_KEY);
let getConstructor = get('constructor');

const { Setoid } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Ord = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Setoid)
        && ('function' === typeof getLte(o)))
            return true;
        return false;
    },

    from: f => getPair(f),
};


export { Ord };