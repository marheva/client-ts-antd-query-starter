import React from "react";
import Wrapper from "../WrapperBase";

const component = (props) => shallow(<Wrapper children={props} />);

describe("WrapperBase component", () => {
  it("should render with children props", () => {
    const wrapperComponent = component(<h1>Test</h1>);
    expect(toJson(wrapperComponent)).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const wrapperComponent = component();
    expect(toJson(wrapperComponent)).toMatchSnapshot();
  });
});
