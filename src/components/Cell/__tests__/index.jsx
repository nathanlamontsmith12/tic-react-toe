import React from 'react'; 
import { shallow } from 'enzyme'; 
import Cell from "../index"; 

describe('Cell', () => {
    let props, wrapper; 

    beforeAll(() => {
        props = {
            value: 'O', 
            index: 0,
            handleClick: jest.fn()
        };

        wrapper = shallow(<Cell {...props} />); 
    });

    it("should render a div", () => {
        const element = wrapper.find("div");
        expect(element).toExist(); 

        element.simulate('click'); 
        expect(props.handleClick).toHaveBeenCalled(); 

        expect(element).toHaveText(props.value); 
    });

    it('should render a hyphen if no value', () => { 
        wrapper.setProps({
            value: undefined
        }); 

        const element = wrapper.find("div"); 
        expect(element).toExist(); 
        expect(element).toHaveText("-");
    }); 
});