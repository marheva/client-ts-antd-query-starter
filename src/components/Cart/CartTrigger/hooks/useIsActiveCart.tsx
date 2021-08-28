import { useCallback, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { APP_PATH } from '../../../../constants';

const useIsActiveCart = (): boolean => {
    const match = useRouteMatch()
    const [state, setState] = useState<boolean>(false);

    const { PATHS: { CART } } = APP_PATH;

    useEffect(() => {
        const path = match.path;
        setState(CART === path)
    }, [match]);

    return state
}

export default useIsActiveCart;