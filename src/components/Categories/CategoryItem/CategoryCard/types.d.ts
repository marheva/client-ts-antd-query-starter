import { CardInterface, CardType } from "antd/lib/card";
import { ReactElement } from "react";

import { CardProps } from "antd/lib/card";

interface CategoryCardPropsTypes extends CardProps {
  categoryId: string;
  categoryPhotos: any[];
  categoryName: string;
  onClick?: () => void;
  children: React.ReactNode | ReactElement;
  noContent?: boolean;
  categorySrcset: any;
}
