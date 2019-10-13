
/**
 *
 * @summary A function that creates a builder for partial function that have some
 * keys set in a named destructured object.
 *
 * @description This function accepts a function and creates a builder that can generate
 * functions with partial applied keys.
 *
 * NOTE: Partial functions currently only supports functions that accepts one argument which is an object,
 * and the applied arguments are named keys inside this function, for partial functions with positional
 * arguments, you can check [lodash's `partial`](https://lodash.com/docs/4.17.15#partial)
 *
 * @example
 * const addAndMultiply = ({ n1, n2, n3 }) => { return (n1 + n2) * n3 };
 * const addPartialBuilder = toPartialBuilder(addAndMultiply);
 * const multiplyWithThree = addPartialBuilder({ n3: 3 });
 * multiplyWithThree({ n1: 1, n2: 1 }); // 6 .. expression evaluated is (1 + 1) * 3
 *
 * @param {Function} fn
 *
 * @returns {Function}
 */
const toPartialBuilder = (fn) => (partialKeys = {}) => (args) => fn({ ...partialKeys, ...args });

module.exports = { toPartialBuilder };
