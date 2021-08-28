import React from "react";
import Card from "../CardBase";

const component = (props) => shallow(<Card children={props} />);

describe("CardBase component", () => {
  it("should render with children props", () => {
    const cardComponent = component(<h1>Test</h1>);
    expect(cardComponent).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const cardComponent = component();
    expect(cardComponent).toMatchSnapshot();
  });
});
