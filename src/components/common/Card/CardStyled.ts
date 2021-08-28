import styled from "styled-components";
import { APP_SIZES } from "../../../constants";
import CardBase from "./CardBase";
import { breakpoints } from "../../../styles";

const { BREAKPOINT_SIZES, CATEGORY_IMAGES_SIZES } = APP_SIZES;
const CSS_UNITS = "px";
const INITIAL_BACKGROUND_COLOR = "lightgray";

const CardStyled = styled(CardBase).attrs((props) => ({
  ...props,
}))`
  div.ant-card-body {
    display: ${({ noContent }) => (!!noContent ? "none" : "inherit")};
  }
  .ant-card-cover {
    background-color: ${INITIAL_BACKGROUND_COLOR};
    ${() =>
      breakpoints(
        "width",
        CSS_UNITS,
        [
          { [BREAKPOINT_SIZES.sm]: CATEGORY_IMAGES_SIZES.sm.width },
          { [BREAKPOINT_SIZES.md]: CATEGORY_IMAGES_SIZES.md.width },
          { [BREAKPOINT_SIZES.lg]: CATEGORY_IMAGES_SIZES.lg.width },
          { [BREAKPOINT_SIZES.xl]: CATEGORY_IMAGES_SIZES.xl.width },
        ],
        "min-width"
      )}
    ${() =>
      breakpoints(
        "height",
        CSS_UNITS,
        [
          { [BREAKPOINT_SIZES.sm]: CATEGORY_IMAGES_SIZES.sm.height },
          { [BREAKPOINT_SIZES.md]: CATEGORY_IMAGES_SIZES.md.height },
          { [BREAKPOINT_SIZES.lg]: CATEGORY_IMAGES_SIZES.lg.height },
          { [BREAKPOINT_SIZES.xl]: CATEGORY_IMAGES_SIZES.xl.height },
        ],
        "min-width"
      )}
  }
`;

CardStyled.displayName = "CustomComponentStyledDropdown";
export default CardStyled;
