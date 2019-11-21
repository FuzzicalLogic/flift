import * as F from '../lambda';
import * as C from '.';

/** The key name as defined by convention and the spec. */
const ID_KEY = 'id';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(ID_KEY);
let getId = get(ID_KEY);
let getConstructor = get('constructor');

const { Semigroupoid } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Category = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Semigroupoid)
        && ('function' === typeof getId(getConstructor(o)))
        && (getId(getConstructor(o))() instanceof getConstructor(o)))
            return true;
        return false;
    },

    from: f => getPair(f),
};


export { Category };