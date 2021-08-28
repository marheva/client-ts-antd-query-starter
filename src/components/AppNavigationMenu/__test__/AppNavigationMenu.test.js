import React from "react";
import AppNavigationMenu from "../index";

const testArray = [
  {
    title: <b>ONE</b>,
    linkTo: "/",
    disabled: false,
    render: true,
    id: "1",
  },
  {
    title: <b>Two</b>,
    linkTo: "/",
    disabled: true,
    render: false,
    id: "2",
  },
];

describe("should render AppNavigationMenu component", () => {
  it("should have Menu", () => {
    const menuComponent = shallow(
      <AppNavigationMenu mode="horizontal" menuItems={testArray} />
    );
    expect(menuComponent).toMatchSnapshot();
  });
});
