import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../components/common/Wrapper';

function CartScreen(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Wrapper>{'[CartScreen]'}</Wrapper>
        </Wrapper>
    )
}

export default CartScreen;