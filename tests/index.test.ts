import { coth } from 'coth';
import { describe, expect, it } from 'vitest';

describe('coth', () => {
  it('should be a function', () => {
    expect(coth).toBeTypeOf('function');
  });

  it('should calculate the hyperbolic cotangent of a number', () => {
    expect(coth(0)).toBe(Number.POSITIVE_INFINITY);
    expect(coth(1)).toBeCloseTo(1.313_035_285_499_3, 4);
    expect(coth(2)).toBeCloseTo(1.037_314_720_727_5, 4);
    expect(coth(3)).toBeCloseTo(1.004_969_823_313_7, 4);
    expect(coth(Math.PI)).toBeCloseTo(1.003_741_873_197_3, 4);
  });
});
