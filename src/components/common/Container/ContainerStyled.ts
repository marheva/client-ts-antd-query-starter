import styled from "styled-components";
import ContainerBase from "./ContainerBase";
import { APP_SIZES, APP_SPICING } from "../../../constants";
import { breakpoints } from "../../../styles";

const { BREAKPOINT_SIZES, CONTAINER_SIZES } = APP_SIZES;

const {
  SPACING: { s4 },
} = APP_SPICING;

const CSS_UNITS = "px";

const ContainerStyled = styled(ContainerBase)<{ fluid?: boolean }>`
  width: 100%;
  padding: 0 ${s4 + CSS_UNITS};
  margin: 0 auto;
  ${({ fluid }) =>
    !fluid &&
    breakpoints(
      "max-width",
      CSS_UNITS,
      [
        { [BREAKPOINT_SIZES.md]: CONTAINER_SIZES.md },
        { [BREAKPOINT_SIZES.lg]: CONTAINER_SIZES.lg },
        { [BREAKPOINT_SIZES.xl]: CONTAINER_SIZES.xl },
        { [BREAKPOINT_SIZES.xxl]: CONTAINER_SIZES.xxl },
      ],
      "min-width"
    )}
`;

ContainerStyled.displayName = "CustomComponentStyledContainer";
export default ContainerStyled;
