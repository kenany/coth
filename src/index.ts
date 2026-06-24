import { tanh } from 'tanh';

/**
 * Calculate the hyperbolic cotangent of a number.
 *
 * @param x The number to calculate the hyperbolic cotangent of.
 * @returns The hyperbolic cotangent of `x`.
 *
 * @example
 * ```typescript
 * coth(Math.PI);
 * // => 1.0037418731973
 * ```
 */
export function coth(x: number): number {
  return 1 / tanh(x);
}
