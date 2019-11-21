import * as F from '../lambda';
import * as C from './';

/** The key name as defined by convention and the spec. */
const KEY = 'ap';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(KEY);
let getAlt = get(KEY);
let getConstructor = get('constructor');

const { Functor } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Alt = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Functor)
        && ('function' === typeof getAlt(o))
        && (getConstructor(o) === getConstructor(getAlt(o)(x => x))))
            return true;
        return false;
    },
    from: f => getPair(f)
};


export { Alt };