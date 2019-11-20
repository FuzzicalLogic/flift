import * as F from '../lambda';
import * as C from './';

/** The key name as defined by convention and the spec. */
const SEMIGROUP_KEY = 'concat';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(SEMIGROUP_KEY);
let getConcat = get(SEMIGROUP_KEY);
let getConstructor = get('constructor');

const { Droppable } = C;
const Semigroup = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Droppable)
        && ('function' === typeof getConcat(o))
        && (getConstructor(o) === getConstructor(getConcat(o)(x))))
            return true;
        return false;
    },

    /**
     * Creates a new Functor Type from a function. A Functor is the most basic 
     * of the algebrae and when mapped will automatically recontextualize the result
     * to a new instance of the Type.
     *
     * @param {Function} f The function that is used to concatenate to the 
     * Semigroup.
     */
    from: f => getPair(f),
};

export { Semigroup };
