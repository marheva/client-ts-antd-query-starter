import React from "react";
import { COLORS_NAMESPACE } from "../../constants/colors";

const { greyLighter } = COLORS_NAMESPACE;

const APP_NAVIGATION_ITEMS: MenuItemPropsTypes[] = [
    {
        title: <b>HOME</b>,
        linkTo: '/',
        disabled: false,
        render: true,
        id: '1'
    },
    {
        title: <b>CATALOG</b>,
        linkTo: `/catalog`,
        disabled: false,
        render: true,
        id: '2'
    }
];

const APP_HEADER_COLORS = {
    BACKGROUND: greyLighter
}

export { APP_NAVIGATION_ITEMS, APP_HEADER_COLORS }