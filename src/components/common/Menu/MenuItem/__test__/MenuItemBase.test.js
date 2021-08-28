import React from "react";
import MenuItem from "../MenuItemBase";

const component = (props) => shallow(<MenuItem children={props} />);

describe("MenuItemBase component", () => {
  it("should render with children props", () => {
    const MenuItemComponent = component(<h1>Test</h1>);
    expect(MenuItemComponent).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const MenuItemComponent = component();
    expect(MenuItemComponent).toMatchSnapshot();
  });
});
