import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { useLocalStorage, useResponsiveState } from '../../../hooks';
import DesktopHeader from '../../../components/DesktopHeader';
import HeaderWrapper from './HeaderWrapper';
import { appHeaderConfiguration } from '../../../configurations';

const MENU_ITEMS: MenuItemPropsTypes[] = appHeaderConfiguration.APP_NAVIGATION_ITEMS;

function Header({ ...props }: HeaderPropsTypes) {
    const isMobileHeader = useResponsiveState('lg');
    const history = useHistory();

    return (
        <HeaderWrapper>
            {!!!isMobileHeader && <DesktopHeader history={history} menuItems={MENU_ITEMS} />}
        </HeaderWrapper>)
}

export default withRouter(Header);