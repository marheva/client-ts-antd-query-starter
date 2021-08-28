import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuHelpers } from './helpers';
import { useLocalStorage } from '../../hooks';
import { Menu, MenuItem } from '../common/Menu';


function AppNavigationMenu({ history, menuItems, mode }: AppNavigationMenuPropsTypes) {
    return (
        <Menu mode={mode} inlineIndent={4} >
            {menuItems.map(
                ({ render, linkTo, title }, key) =>
                    !!render && (
                        <MenuItem key={key} >
                            <Link
                                to={linkTo || ''}
                            >
                                {title}
                            </Link>
                        </MenuItem>
                    )
            )}
        </Menu>
    );
}

export default AppNavigationMenu;