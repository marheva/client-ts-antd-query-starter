import React from 'react'
import { Menu } from 'antd'
import { MenuItemCustomProps } from '../types'

const MenuItemBase = ({
    children,
    ...props
}: React.PropsWithRef<MenuItemCustomProps>): JSX.Element => {
    return (
        <Menu.Item {...props}>
            {children}
        </Menu.Item>
    )
}

export default MenuItemBase
