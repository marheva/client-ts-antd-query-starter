import { ReactElement } from "react";
interface WrapperPropsTypes {}

export type WrapperProps = React.PropsWithChildren<WrapperPropsTypes, HTMLDivElement>;
export type RefProps = HTMLDivElement;
