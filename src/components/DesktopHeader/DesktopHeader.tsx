import React from 'react';
import AppNavigationMenu from '../AppNavigationMenu';
import PageHeader from '../common/PageHeader';
import SelectLanguage from '../LanguageSelector/LanguageSelector';
import DesktopHeaderWrapper from './DesktopHeaderWrapper';
import CartTrigger from '../Cart/CartTrigger';
import { Space } from 'antd';

const PAGE_TITLE = "AMConstruction";
const MENU_MODE = "horizontal";

function DesktopHeader({ history, menuItems }: DesktopHeaderPropsTypes) {
    return (
        <DesktopHeaderWrapper>
            <PageHeader
                title={PAGE_TITLE}
                subTitle={<AppNavigationMenu history={history} menuItems={menuItems} mode={MENU_MODE} />}
                extra={[
                    <Space key={1}>
                        <SelectLanguage />
                        <CartTrigger />
                    </Space>

                ]}
            />
        </DesktopHeaderWrapper>
    )
}

export default DesktopHeader;
