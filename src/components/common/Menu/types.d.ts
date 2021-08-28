import { MenuProps } from "antd/lib/menu";
import { MenuItemProps } from "antd/lib/menu/MenuItem";
import { SubMenuProps } from "antd/lib/menu/SubMenu";

interface MenuPropsTypes extends MenuProps {
  mode: any;
}
interface MenuItemPropsTypes extends MenuItemProps {}
interface SubMenuPropsTypes extends SubMenuProps {}

export type MenuCustomProps = React.PropsWithChildren<MenuPropsTypes>;
export type MenuItemCustomProps = React.PropsWithChildren<MenuItemPropsTypes>;
export type SubMenuCustomProps = React.PropsWithChildren<SubMenuPropsTypes>;
