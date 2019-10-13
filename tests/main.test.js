const { toPartialBuilder } = require('../index');

describe('Specs', () => {
  let fn;

  beforeEach(() => {
    jest.clearAllMocks();
    fn = jest.fn();
  });

  describe('Test toPartialBuilder', () => {
    it('returns a builder function', () => {
      const builder = toPartialBuilder(fn);

      expect(builder).toBeFunction();
      expect(fn).not.toBeCalled();
    });
  });

  describe('Test Builder', () => {
    it('allows builder to accept empty arguments', () => {
      const builder = toPartialBuilder(fn);
      const partialFn = builder();

      expect(partialFn).toBeFunction();
      expect(fn).not.toBeCalled();
    });

    it('generates a builder with keys', () => {
      const builder = toPartialBuilder(fn);
      const partialFn = builder({ k1: 1 });

      expect(partialFn).toBeFunction();

      expect(fn).not.toBeCalled();
    });

    it('passes the partially applied keys to the function', () => {
      const builder = toPartialBuilder(fn);
      const partialFn = builder({ k1: 1 });

      expect(partialFn).toBeFunction();

      partialFn();
      expect(fn).toBeCalled();
      expect(fn).toBeCalledWith({ k1: 1 });
    });

    it('allows passing extra keys to the partial function', () => {
      const builder = toPartialBuilder(fn);
      const partialFn = builder({ k1: 1 });

      expect(partialFn).toBeFunction();

      partialFn({ k2: 2 });
      expect(fn).toBeCalled();
      expect(fn).toBeCalledWith({ k1: 1, k2: 2 });
    });

    it('allows overriding partially applied keys in partial function calls', () => {
      const builder = toPartialBuilder(fn);
      const partialFn = builder({ k1: 1 });

      expect(partialFn).toBeFunction();

      partialFn({ k2: 2, k1: 3 });
      expect(fn).toBeCalled();
      expect(fn).toBeCalledWith({ k1: 3, k2: 2 });
    });
  });
});
