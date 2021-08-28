import { SelectProps, SelectValue } from "antd/lib/select";
interface SelectPropsTypes extends SelectProps {}

export type SelectTypeProps<T = SelectValue> = React.PropsWithChildren<
  SelectPropsTypes<T>
>;
export type RefProps = HTMLDivElement;
