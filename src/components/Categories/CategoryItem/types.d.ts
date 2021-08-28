import { ReactNode } from "react";

interface CategoryItemPropsTypes {
  categoryId: string;
  categoryName: string;
  onClick?: () => void;
  children?: JSX.Element | ReactNode;
}
