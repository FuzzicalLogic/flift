const getDroppableKey = (drop = Droppable.basic, key = 'drop') =>
	({ [key]: drop });

const Droppable = {
	[Symbol.hasInstance]: (o) => {
		if ('function' === typeof o['drop'])
			return true;
		return false;
	},
	alias: ['cata', 'fold'],
	basic: () => getDroppableKey((me, x) => f => f(x)),
	custom: f => getDroppableKey(f)
}

export { Droppable };
