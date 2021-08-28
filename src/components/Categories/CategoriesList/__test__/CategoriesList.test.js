import React from "react";
import Wrapper from "../../../common/Wrapper";
import CategoriesList from "../CategoriesList";

describe("should render CategoriesList component", () => {
  it("should contain CategoriesList", () => {
    const component = shallow(<Wrapper />);
    expect(component).toMatchSnapshot();
  });
});
