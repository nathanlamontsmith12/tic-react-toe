import { mount } from "enzyme";
import React from "react";
import { Score } from "../Score";

describe("Score", () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      playerName: "O"
    };
    wrapper = mount(<Score {...props} />);
  });

  it("should render an h4", () => {
    const element = wrapper.find("h4");
    expect(element).toExist();
  });

  it("should render an button", () => {
    const p = wrapper.find("p");
    expect(p).toExist();
    expect(p).toHaveText("0");

    const button = wrapper.find("button");
    expect(button).toExist();
    button.simulate("click");

    expect(p).toHaveText("1");
  });
});
