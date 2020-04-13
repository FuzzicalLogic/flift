import * as F from '../lambda';
import * as C from './';

/** The key name as defined by convention and the spec. */
const INVERT_KEY = 'invert';

const { constant, curry, oo: { get, pair } } = F;
let getPair = curry(pair)(INVERT_KEY);
let getConstructor = get('constructor');
let getInvert = get(INVERT_KEY);

const { Monoid } = C;

const Group = {
    [Symbol.hasInstance]: o => {
        if ((o instanceof Monoid)
        && (typeof getInvert(o) === "function")
        && (getConstructor(getInvert(o)()) === getConstructor(o)))
            return true;
        return false;
    },
    from: f => getPair(f)
};

export { Group };