import * as C from '.';
const { Applicative, Plus } = C;

const Alternative = {
    [Symbol.hasInstance]: o =>
        ((o instanceof Plus) && (o instanceof Applicative)),
};
export { Alternative };