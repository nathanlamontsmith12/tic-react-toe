import { shallow } from 'enzyme';
import React from 'react';
import Cell from './index';

describe('Cell', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      value: 'O',
      index: 1,
      handleClick: jest.fn(),
    };
    wrapper = shallow(<Cell {...props} />);
  });

  it('should render an element representing a clickable cell', () => {
    const element = wrapper.filterWhere(n => n.text() === props.value);
    // use `filterWhere` when `find` doesn't service
    expect(element).toExist();

    expect(element).toHaveProp('data-target-index');
    expect(element.prop('data-target-index')).toEqual(props.index);

    // use `simulate` to trigger DOM events; use it test any interactable elements
    element.simulate('click');
    expect(props.handleClick).toHaveBeenCalled();
  });
});
