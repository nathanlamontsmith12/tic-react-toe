import { BoardContainer } from './index';

describe('BoardContainer', () => {
  let Instance;

  beforeEach(() => {
    // a class is simply an instantiable object, and "state" is just a property of
    // that object; you can access class methods via the instance
    Instance = new BoardContainer();
  });

  describe('verticalRows', () => {
    it('should return the vertical rows', () => {
      Instance.state = {
        cells: [1, 2, 3, 1, 2, 3, 1, 2, 3],
      };
      // because we are reinstantiating the BoardContainer before each test,
      // we can assign the state's value as needed
      const result = Instance.verticalRows();
      expect(result).toEqual([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
    });
  });

  describe('horizontalRows', () => {
    it('should return the vertical rows', () => {
      Instance.state = {
        cells: [1, 1, 1, 2, 2, 2, 3, 3, 3],
      };
      const result = Instance.horizontalRows();
      expect(result).toEqual([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
    });
  });

  describe('marker', () => {
    it('should return X if isXsTurn is true', () => {
      Instance.state = {
        isXsTurn: true,
      };
      const result = Instance.marker();
      expect(result).toEqual('X');
    });

    it('should return O if isXsTurn is false', () => {
      Instance.state = {
        isXsTurn: false,
      };
      const result = Instance.marker();
      expect(result).toEqual('O');
    });
  });

  describe('turn', () => {
    it('should return the number of moves that have been made', () => {
      Instance.state = {
        cells: ['X', '0', null, null, null, null, null, null, null],
      };

      const result = Instance.turn();
      expect(result).toEqual(2);
    });
  });

  describe('componentDidUpdate', () => {
    it('should invoke displayEndgameMessage and reinitializeState if isGameOver evaluates to true', () => {
      const context = {
        displayEndgameMessage: jest.fn(),
        // `jest.fn()` provides access to matchers like `toHaveBeenCalled()`
        isGameOver: () => true,
        // create an anonymous function if you need control of the return value
        reinitializeState: jest.fn(),
      };

      // using `call` to provide your own context (ie. `this`) allows you to test
      // lifecycle functions - or any functions reliant on `this`
      Instance.componentDidUpdate.call(context);
      expect(context.displayEndgameMessage).toHaveBeenCalled();
      expect(context.reinitializeState).toHaveBeenCalled();
    });
  });

  it('should not invoke displayEndgameMessage and reinitializeState if isGameOver evaluates to false', () => {
    const context = {
      displayEndgameMessage: jest.fn(),
      isGameOver: () => false,
      reinitializeState: jest.fn(),
    };

    Instance.componentDidUpdate.call(context);
    expect(context.displayEndgameMessage).not.toHaveBeenCalled();
    expect(context.reinitializeState).not.toHaveBeenCalled();
  });
});
