import React from "react";
import Menu from "../MenuBase";

const component = (props) => shallow(<Menu children={props} />);

describe("MenuBase component", () => {
  it("should render with children props", () => {
    const MenuComponent = component(<h1>Test</h1>);
    expect(MenuComponent).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const MenuComponent = component();
    expect(MenuComponent).toMatchSnapshot();
  });
});
