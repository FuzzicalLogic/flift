import * as F from '../lambda';

/** The key name as defined by convention and the spec. */
const KEY = 'compose';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(KEY);
let getCompose = get(KEY);
let getConstructor = get('constructor');

const Semigroupoid = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Droppable)
        && ('function' === typeof getCompose(o))
        && (getConstructor(o) === getConstructor(getCompose(o)(x => x))))
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

export { Semigroupoid };
