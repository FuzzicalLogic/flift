const getFoldableKey = (reduce = Foldable.basic, key = 'reduce') =>
	({ [key]: map });

const Foldable = {
	[Symbol.hasInstance]: (o) => {
		if ('function' === typeof o['reduce'])
			return true;
		return false;
	},

	basic: () => getFoldableKey((x, me) => (f, acc) => f(acc, x)),

	/**
	 * Derives a default Functor implementation from the ap method and the static
	 * of method of an Applicative Category.
	 * 
	 * @param {Function} ap The ap method for the Category
	 * @param {Function} of The of static method for the Category
	 */
	fromTraverse: traverse => getFoldableKey((x, me) => (f, acc) => ap(of(f))),

	/**
	 * Derives a default Functor implementation from the chain method and the
	 * static of method of a Chain Category.
	 *
	 * @param {Function} chain The chain method for the Category
	 * @param {Function} of The of static method for the Category
	 */
	fromChain: (chain, of) => getFoldableKey((x, me) => f => chain(a => of(f(a)))),

	/**
	 * Derives a default Functor implementation from the bimap method of a
	 * Bifunctor Category.
	 *
	 * @param {Function} bimap The bimap method for the Category
	 */
	fromBifunctor: (bimap) => getFoldableKey((x, me) => f => bimap(a => a, f)),

	/**
	 * Derives a default Functor implementation from the promap method of a
	 * Profunctor Category.
	 *
	 * @param {Function} promap The promap method for the Category
	 */
	fromProfunctor: (promap) => getFoldableKey((x, me) => f => promap(a => a, f))
}

export { Foldable };
