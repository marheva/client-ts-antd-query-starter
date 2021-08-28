interface MenuItemPropsTypes {
  title: string | JSX.Element;
  subMenuItems?: object[];
  linkTo?: string;
  disabled: boolean;
  render: boolean;
  id: string;
}

interface AppNavigationMenuPropsTypes {
  history?: { location: { pathname: string }; push: (arg0: string) => void };
  menuItems: MenuItemPropsTypes[];
  mode?:
    | "horizontal"
    | "vertical"
    | "vertical-left"
    | "vertical-right"
    | "inline"
    | undefined;
}

interface RegularMenuItemPropsTypes {
  children?: string | JSX.Element;
  linkTo?: string;
  disabled?: boolean;
  render?: boolean;
  id: string;
  onClick: (arg0: string) => void;
}

interface MenuItemWithSubPropsTypes extends MenuItemPropsTypes {
  title: string | JSX.Element;
  children: JSX.Element[];
  linkTo?: string;
  disabled?: boolean;
  render?: boolean;
  id: string;
}
