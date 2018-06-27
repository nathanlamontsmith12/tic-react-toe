import React from 'react';
import { shallow } from 'enzyme';
import { Board, text } from './index';
import Cell from '../Cell';

describe('Board', () => {
  let props, wrapper;
  // declare your variables here, so that they are accessible in child scope

  beforeEach(() => {
    // using `beforeEach` rather than `beforeAll` resets your tests, so that any
    // reassignments you make inside your tests don't persist
    props = {
      cells: [null, null, null, null, null, null, null, null, null],
      handleClick: jest.fn(),
      isXsTurn: true,
    };

    wrapper = shallow(<Board {...props} />);
    // prefer `shallow` to `mount`, so that you are solely testing the component
    // in question
  });

  it('shoulder render the x text if isXsTurn is true', () => {
    expect(wrapper).toIncludeText(text.x);
    expect(wrapper).not.toIncludeText(text.o);
  });

  it('should render the o text if isXsTurn is false', () => {
    wrapper.setProps({
      isXsTurn: false,
    });
    // use `setProps` to customize the props for a given test
    expect(wrapper).toIncludeText(text.o);
    expect(wrapper).not.toIncludeText(text.x);
  });

  it('should render a Cell for each cell', () => {
    const { cells } = props;
    const elements = wrapper.find(Cell);
    expect(elements.length).toEqual(cells.length);
    cells.forEach((cell, index) => {
      const element = elements.find({ value: cell, index: index });
      // `find` is chainable
      expect(element).toExist();
      // always check for existence first - further tests are contingent upon existence
      expect(element).toHaveProp('handleClick');
      expect(element.prop('handleClick')).toEqual(props.handleClick);
    });
  });
});
