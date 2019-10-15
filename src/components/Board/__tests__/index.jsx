import React from 'react'; 
import { shallow } from 'enzyme'; 
import Board from "../index"; 

const text = {
    x: "It's X's Turn",
    o: "It's O's Turn"
}

const exampleBoardState = ["X", "O", null, null, "X", null, null, "O", null];


describe('Board', () => {
    let props, wrapper; 

    beforeAll(() => {
        props = {
            cells: exampleBoardState,
            isXsTurn: true,
            handleClick: jest.fn()
        }; 

        wrapper = shallow(<Board {...props} />); 
    });

    it("should render cells with proper marker", () => {
        wrapper.find(".Board__cell").forEach((cell, i) => {
            expect(cell).toExist(); 
            const expectedText = exampleBoardState[i] || "-"; 
            expect(cell).toHaveText(expectedText);
        });
    });

    it("should indicate the current player's turn for player X", () => {
        const element = wrapper.find(".Board__indicator"); 
        expect(element).toExist();
        expect(element).toHaveText(text.x);
    });

    it("should indicate the current player's turn for player O", () => {
        wrapper.setProps({
            isXsTurn: false
        });

        const element = wrapper.find(".Board__indicator");
        expect(element).toExist();
        expect(element).toHaveText(text.o); 
    });
});