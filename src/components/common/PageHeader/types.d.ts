import { PageHeaderProps } from "antd";

interface PageHeaderPropsTypes extends PageHeaderProps {}

export type PageHeaderCustomProps =
  React.PropsWithChildren<PageHeaderPropsTypes>;
