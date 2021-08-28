import { ReactElement } from "react";
interface ContainerPropsTypes {
  fluid?: boolean;
}

export type ContainerProps = React.PropsWithChildren<
  ContainerPropsTypes,
  HTMLDivElement
>;
