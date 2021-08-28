import React from 'react';
import { RefProps, WrapperProps } from './types';

const WrapperBase = React.forwardRef<RefProps, WrapperProps>(
    (props, ref) => (
        <div
            {...props}
            ref={ref}
        >
            {props.children}
        </div>
    ))

export default WrapperBase;