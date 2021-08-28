import React, { useCallback, useMemo, useState } from 'react';
import Wrapper from '../common/Wrapper';

function Cart({ ...props }: CartPropsTypes): JSX.Element {
    // const [selectedValue, setSelectedValue] = useState<string>(DEFAULT_SELECTED_LANGUAGE);

    const onClick = useCallback((value: string) => {
        // setSelectedValue(prevValue => prevValue === value ? prevValue : value)
    }, []);

    return (
        <Wrapper>
            Cart
        </Wrapper>
    )

}
export default Cart