import React from "react";
import Container from "../ContainerBase";

const component = (props) => shallow(<Container {...props} />);

describe("ContainerBase component", () => {
  it("should render with children props", () => {
    const containerComponent = component({ children: <h1>Test</h1> });
    expect(toJson(containerComponent)).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const containerComponent = component();
    expect(toJson(containerComponent)).toMatchSnapshot();
  });
  it("should render with fluid true props", () => {
    const containerComponent = component({ fluid: true });
    expect(toJson(containerComponent)).toMatchSnapshot();
  });
  it("should render with fluid false props", () => {
    const containerComponent = component({ fluid: false });
    expect(toJson(containerComponent)).toMatchSnapshot();
  });
  it("should render with fluid & children props", () => {
    const containerComponent = component({ children: <h1>Test</h1>, fluid: false });
    expect(toJson(containerComponent)).toMatchSnapshot();
  });
});
