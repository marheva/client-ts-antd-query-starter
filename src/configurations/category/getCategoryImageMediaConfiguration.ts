import { APP_SIZES } from "../../constants";

const getCategoryImageMediaConfiguration: { [size: string]: string } = {
  small: "(min-width: 100px) and (max-width: 575px)",
  medium: "(min-width: 576px) and (max-width: 1199px)",
  large: "(min-width: 1200px)",
};

export default getCategoryImageMediaConfiguration;
