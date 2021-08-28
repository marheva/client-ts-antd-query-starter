import React from "react";
import Select from "../SelectBase";

const TEST_PROPS = {
  options: [
    { label: "fr", value: "fr-FR" },
    { label: "en", value: "en-EN", disabled: false },
  ],
  value: 0,
  onChange: () => {},
};

const setUp = (props) => shallow(<Select {...props} />);

describe("SelectBase component", () => {
  describe("Has props", () => {
    it("should render Select options", () => {
      const selectComponent = setUp(TEST_PROPS);
      expect(selectComponent).toMatchSnapshot();
    });
    it("should render Select with fr option", () => {
      const selectComponent = setUp(TEST_PROPS);
      expect(
        selectComponent.simulate("change", { target: { value: "fr" } })
      ).toMatchSnapshot();
    });
  });
  describe("Has no props", () => {
    it("should render Select options", () => {
      const selectComponent = setUp();
      expect(selectComponent).toMatchSnapshot();
    });
  });
});
