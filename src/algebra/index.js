export * from './Droppable';

export * from './TypeCategory';
export * from './Setoid';
export * from './Ord';

export * from './Foldable';
//export * from './Traversable'; //(Foldable, Functor) > .traverse

export * from './Semigroup';
export * from './Monoid';
export * from './Group';

export * from './Semigroupoid';
export * from './Category';

export * from './Functor';
//export * from './Profunctor'; //(Functor) > .promap
//export * from './Extend'; //(Functor) > .extend
//export * from './Comonad'; //(Extend) > .extract
//export * from './Bifunctor'; //(Functor) > .bimap
export * from './Apply';
export * from './Chain';
export * from './Applicative'; //(Apply) > .of
//export * from './ChainRec'; //(Apply) > .chainRec
export * from './Monad';

export * from './Alt';
export * from './Plus';
//export * from './Alternative'; //(Applicative, Plus)
