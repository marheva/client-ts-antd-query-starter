import React from 'react';
import styled from 'styled-components';
import { APP_HEADER_COLORS } from '../../configurations/appHeader/headerNavigation';
import Wrapper from '../common/Wrapper';

const { BACKGROUND } = APP_HEADER_COLORS;
const HeaderBackgroundColor = BACKGROUND;
const NavigationBackgroundColor = 'transparent';
const LanguagesBackgroundColor = 'transparent';

const DesktopHeaderWrapper = styled(Wrapper)`
    background-color: ${HeaderBackgroundColor};
        .ant-page-header-heading-sub-title .ant-menu {
            border-color: transparent;
            background: ${NavigationBackgroundColor}; 
        }
        .ant-page-header-heading-extra .ant-select {
            &-selector {
                background: ${LanguagesBackgroundColor};
            }
        }
`;

export default DesktopHeaderWrapper;