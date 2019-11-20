import { curry } from './curry'

/**
 * Applies a function to the map method of an object.
 * 
 * @param {Function} f The function to map over xs with
 * @param {any} xs Any object with a map method
 */
export const map = curry((f, xs) => xs.map(f));
