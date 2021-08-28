import React from 'react';
import { Menu } from 'antd';
import { MenuCustomProps } from '../types';


const MenuBase = React.forwardRef(
    ({ children, className, ...props }: MenuCustomProps, ref): JSX.Element => {
        return (
            <Menu {...props}>
                {children}
            </Menu>
        )
    },
)

export default MenuBase
