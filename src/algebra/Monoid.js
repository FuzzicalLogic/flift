import * as F from '../lambda';
import * as C from './';

/** The key name as defined by convention and the spec. */
const EMPTY_KEY = 'empty';

const { constant, curry, oo: { get, pair } } = F;
let getPair = curry(pair)(EMPTY_KEY);
let getConstructor = get('constructor');
let getEmpty = get(EMPTY_KEY);

const { Semigroup } = C;

const Monoid = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Semigroup)
        && (typeof getEmpty(getConstructor(o)) === "function")
        && (getConstructor(getEmpty(o)()) === getConstructor(o)))
            return true;
        return false;
    },
    empty: v => getPair(constant(v))
};

export { Monoid };