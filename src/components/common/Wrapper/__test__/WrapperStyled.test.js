import React from "react";
import Wrapper from "../index";

const component = (props) => shallow(<Wrapper children={props} />);

describe("WrapperStyled component", () => {
  it("should render with children props", () => {
    const wrapperComponent = component(<h1>Test</h1>);
    expect(toJson(wrapperComponent)).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const wrapperComponent = component();
    expect(toJson(wrapperComponent)).toMatchSnapshot();
  });
});
