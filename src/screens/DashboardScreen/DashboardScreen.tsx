import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../components/common/Wrapper';

function DashboardScreen() {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Wrapper>{'[DashboardScreen]'}</Wrapper>
            {/* <CategoriesCatalog categories={categories} categoriesImages={categoriesImages} /> */}
        </Wrapper>
    )
}

export default DashboardScreen;
