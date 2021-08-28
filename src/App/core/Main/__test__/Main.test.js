import React from "react";
import Main from "../index";

describe("should render Main component", () => {
  it("should render Children", () => {
    const component = shallow(<Main children={<h1>TEST__CHILDREN</h1>} />);
    expect(component).toMatchSnapshot();
  });
  it("should not render Children", () => {
    const component = shallow(<Main />);
    expect(component).toMatchSnapshot();
  });
});
