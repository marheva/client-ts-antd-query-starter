import React from "react";
import Picture from "../PictureBase.tsx";

const TEST_PROPS = {
  sources: [{ type: "jpg", media: "", srcset: "" }],
  alt: "Image alt",
};

const component = (props) => shallow(<Picture {...props} />);

describe("PictureBase component", () => {
  it("should render with sources props", () => {
    const PictureComponent = component({
      sources: TEST_PROPS.sources,
      alt: TEST_PROPS.alt,
    });
    expect(PictureComponent).toMatchSnapshot();
  });

  it("should render without sources props", () => {
    const PictureComponent = component({ alt: TEST_PROPS.alt });
    expect(PictureComponent).toMatchSnapshot();
  });
});
