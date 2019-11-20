import { merge } from './merge';
import { reduce } from '../reduce';

/**
 * Composes an object from a list Key/Value pairs into a source object.
 * 
 * @param {Object} xs The object to add the key/value pairs to
 * @returns {Function} Curried function that accepts a list of Key/Value pairs
 * and returns an object.
 */
export const mergeAll = (...xs) => reduce(merge, Object.create(null));
