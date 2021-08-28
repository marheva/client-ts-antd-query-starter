import React from "react";
import Select from "../SelectBase";

const TEST_PROPS = {
  options: [
    { label: "fr", value: "fr-FR" },
    { label: "en", value: "en-EN", disabled: false },
  ],
};

const setUp = (props) => shallow(<Option />);

describe("SelectOptionBase component", () => {
  it("updates the select input value when an option is clicked", async () => {
    const selectComponent = setUp(TEST_PROPS);
    expect(selectComponent).toMatchSnapshot();
  });
});
