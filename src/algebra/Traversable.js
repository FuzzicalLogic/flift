import * as F from '../lambda';
import * as C from './';

/** The key name as defined by convention and the spec. */
const KEY = 'traverse';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(KEY);
let getKey = get(KEY);
let getConstructor = get('constructor');

const { Functor, Foldable } = C;
/**
 * Creates a Chain that implements the Functor specification.
 * 
 * @param {any} g 
 */
const Traversable = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Functor)
        && (o instanceof Foldable)
        && (getConstructor(o) === getConstructor(getKey(o)(x => x))))
            return true;
        return false;
    },

    from: f => getPair(f),
};


export { Traversable };