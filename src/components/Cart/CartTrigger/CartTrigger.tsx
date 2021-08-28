import React, { useCallback } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ButtonIcon } from '../../common/Button';
import { useHistory } from 'react-router-dom';
import { APP_PATH } from '../../../constants';
import { useIsActiveCart } from './hooks';
import { Badge } from 'antd';

const { PATHS: { CART } } = APP_PATH;

function CartTrigger({ ...props }: CartTriggerPropsTypes): JSX.Element {
    const history = useHistory();
    const isDisabled = useIsActiveCart();

    const onClick = useCallback(() => history.push(CART), []);

    return (
        <Badge count={1}> <ButtonIcon onClick={onClick} icon={<ShoppingCartOutlined />} disabled={isDisabled} /></Badge>
    )

}
export default CartTrigger