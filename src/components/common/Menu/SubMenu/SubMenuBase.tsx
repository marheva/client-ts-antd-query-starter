import React from 'react';
import { Menu } from 'antd'
import { SubMenuCustomProps } from '../types'

const { SubMenu } = Menu

const SubMenuBase = ({ children, ...props }: SubMenuCustomProps): JSX.Element => {
    return (
        <SubMenu {...props} >
            {!!children && children}
        </SubMenu>
    )
}

export default SubMenuBase
