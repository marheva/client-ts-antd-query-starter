import { APP_SIZES } from "../../constants";
const { BREAKPOINT_SIZES } = APP_SIZES;
const { xs, sm, md } = BREAKPOINT_SIZES;

const getCategoryImageConfiguration = (width: number) => {
  if (width < +xs) {
    return "xs";
  } else if (width >= +xs && width < +sm) {
    return "small";
  } else if (width >= +sm && width < +md) {
    return "medium";
  } else if (width >= +md) {
    return "large";
  }
};

export { getCategoryImageConfiguration };
