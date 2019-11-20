/**
 * Composes a new Object from two other objects.
 * 
 * @param {Object} x
 * @param {Object} y
 */
export const merge = (x, y) => ({ ...x, ...y });
