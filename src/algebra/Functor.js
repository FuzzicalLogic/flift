import * as F from '../lambda';

/** The key name as defined by convention and the spec. */
const FUNCTOR_KEY = 'map';

const { curry, oo: { get, pair } } = F;
let getPair = curry(pair)(FUNCTOR_KEY);
let getMap = get(FUNCTOR_KEY);
let getConstructor = get('constructor');

const Functor = {
    [Symbol.hasInstance]: o => {
        if (('function' === typeof getMap(o))
        && (getConstructor(o) === getConstructor(getMap(o)(x => x))))
            return true;
        return false;
    },

    basic: () => getPair((x, me) => f => getConstructor(me)(f(x))),

	/**
	 * Attaches a function to a keyvalue pair for injecting into a category. The
	 * function must match the signature:
	 * (value, instance) => f => code
	 * 
	 */
    from: f => getPair(f),

	/**
	 * Derives a default Functor implementation from the ap method and the static
	 * of method of an Applicative Category.
	 * 
	 * @param {Function} ap The ap method for the Category
	 * @param {Function} of The of static method for the Category
	 */
    fromApplicative: (ap, of) => getPair((x, me) => f => ap(of(f))),

	/**
	 * Derives a default Functor implementation from the chain method and the
	 * static of method of a Chain Category.
	 *
	 * @param {Function} chain The chain method for the Category
	 * @param {Function} of The of static method for the Category
	 */
    fromChain: (chain, of) => getPair((x, me) => f => chain(a => of(f(a)))),

	/**
	 * Derives a default Functor implementation from the bimap method of a
	 * Bifunctor Category.
	 *
	 * @param {Function} bimap The bimap method for the Category
	 */
    fromBifunctor: (bimap) => getPair((x, me) => f => bimap(a => a, f)),

	/**
	 * Derives a default Functor implementation from the promap method of a
	 * Profunctor Category.
	 *
	 * @param {Function} promap The promap method for the Category
	 */
    fromProfunctor: (promap) => getPair((x, me) => f => promap(a => a, f))
}


export { Functor };
