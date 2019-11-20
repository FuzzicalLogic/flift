export * from './Droppable';

export * from './TypeCategory';
export * from './Setoid';

export * from './Foldable';
//export * from './Traversable'; //(Foldable, Functor) > .traverse

export * from './Semigroup';
export * from './Monoid';

export * from './Functor';
//export * from './Profunctor'; //(Functor) > .promap
//export * from './Extend'; //(Functor) > .extend
//export * from './Comonad'; //(Extend) > .extract
//export * from './Bifunctor'; //(Functor) > .bimap
export * from './Apply';
//export * from './Applicative'; //(Apply) > .of
export * from './Chain';
//export * from './ChainRec'; //(Apply) > .chainRec
//export * from './Monad'; //(Applicative, Chain)

//export * from './Alt'; //(Functor) > .alt
//export * from './Plus'; //(Functor) > static.zero
//export * from './Alternative'; //(Applicative, Plus)
