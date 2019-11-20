/**
 * Defines a custom Type Category. The new Type may include any Category spec 
 * by passing an object map of named morphisms to the constructor. It is generally
 * advised that you build your morphisms before defining the Type.
 * 
 * @param {Object} morphism Key/Value map of functions to define on the Type at
 * construction
 * @returns {Function} static constructor for instances of the new Type
 */

class TypeCategory {
    constructor(morphisms = Object.create(null), name = 'C') {
        const Type = (...xs) => {
            let self = Object.create(Type.prototype);
            let setContext = callWithArguments(...xs, self);
            let mapContexts = k => self[k] = setContext(this.morphisms[k]);
            Object.keys(this.morphisms).forEach(mapContexts);
            return self;
        }
        Type.prototype = Object.create(null);
        Type.prototype.type = name;

        Type.prototype.constructor = Type;
        Type.prototype.constructor.type = name;
        this.pure = this.of = Type.prototype.constructor;
        this.of.prototype = Type.prototype;
        this.morphisms = { ...morphisms };
    }
};
export { TypeCategory };

const callWithArguments = (...xs) => f => f(...xs);
