import * as C from './';
const { Applicative, Chain } = C;

const Monad = {
    [Symbol.hasInstance]: o => ((o instanceof Chain) && (o instanceof Applicative)),
};

export { Monad };