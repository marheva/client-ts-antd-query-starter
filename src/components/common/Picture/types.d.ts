import { ImgHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";

interface PicturePropsTypes {
  sources: { type?: string; media?: string; srcset: string }[];
  alt: string;
  style?: CSSProperties;
}

export type PictureProps = React.PropsWithChildren<PicturePropsTypes>;
