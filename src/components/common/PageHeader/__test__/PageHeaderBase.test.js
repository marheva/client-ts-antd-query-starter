import React from "react";
import PageHeder from "../PageHeaderBase";

const component = (props) => shallow(<PageHeder children={props} />);

describe("PageHederBase component", () => {
  it("should render with children props", () => {
    const PageHederComponent = component(<h1>Test</h1>);
    expect(PageHederComponent).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const PageHederComponent = component();
    expect(PageHederComponent).toMatchSnapshot();
  });
});
