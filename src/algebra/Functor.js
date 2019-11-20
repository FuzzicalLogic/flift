/**
 * Pairs a function to the associated key as defined by the fantasyland spec
 * (and standard convention) and returns it. This algebraic morphism may then be
 * used by any Category. If a function is not provided, the default morphic
 * relationship, as defined by the spec will be used.
 * 
 * @param {Function} map The function to pair. Must have the following signature:
 * (context, value) => f => code
 * @param {string} key The key to associate the algebraic function to. Default
 * value is 'map'.
 * 
 * @todo The exportation is the same every time for all Algebraics:
 *     1. The new Type starts as a new object
 *     2. Add an 'of' method that acts as the constructor
 *			a. During instantiation, 'of' binds the algebrae with the value
 */
const getFunctorKey = (map = Functor.basic, key = 'map') =>
    ({ [key]: map });

const Functor = {
    [Symbol.hasInstance]: o => {
        if ('function' === typeof o['map'])
            if (o.constructor === o['map'](x => x).constructor)
                return true;
        return false;
    },

    basic: () => getFunctorKey((x, me) => f => me.constructor(f(x))),

	/**
	 * Attaches a function to a keyvalue pair for injecting into a category. The
	 * function must match the signature:
	 * (value, instance) => f => code
	 * 
	 */
    from: f => getFunctorKey(f),

	/**
	 * Derives a default Functor implementation from the ap method and the static
	 * of method of an Applicative Category.
	 * 
	 * @param {Function} ap The ap method for the Category
	 * @param {Function} of The of static method for the Category
	 */
    fromApplicative: (ap, of) => getFunctorKey((x, me) => f => ap(of(f))),

	/**
	 * Derives a default Functor implementation from the chain method and the
	 * static of method of a Chain Category.
	 *
	 * @param {Function} chain The chain method for the Category
	 * @param {Function} of The of static method for the Category
	 */
    fromChain: (chain, of) => getFunctorKey((x, me) => f => chain(a => of(f(a)))),

	/**
	 * Derives a default Functor implementation from the bimap method of a
	 * Bifunctor Category.
	 *
	 * @param {Function} bimap The bimap method for the Category
	 */
    fromBifunctor: (bimap) => getFunctorKey((x, me) => f => bimap(a => a, f)),

	/**
	 * Derives a default Functor implementation from the promap method of a
	 * Profunctor Category.
	 *
	 * @param {Function} promap The promap method for the Category
	 */
    fromProfunctor: (promap) => getFunctorKey((x, me) => f => promap(a => a, f))
}


export { Functor };
