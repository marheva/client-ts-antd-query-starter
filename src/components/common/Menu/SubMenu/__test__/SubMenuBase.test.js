import React from "react";
import SubMenu from "../SubMenuBase";

const component = (props) => shallow(<SubMenu children={props} />);

describe("SubMenuBase component", () => {
  it("should render with children props", () => {
    const SubMenuComponent = component(<h1>Test</h1>);
    expect(SubMenuComponent).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const SubMenuComponent = component();
    expect(SubMenuComponent).toMatchSnapshot();
  });
});
