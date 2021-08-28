import React from 'react';
import { Select } from 'antd';
import { RefProps, SelectTypeProps } from './types';


const SelectBase = React.forwardRef<RefProps, SelectTypeProps>((props, ref): JSX.Element => {
	return <Select {...props} ref={ref}>{!!props.children && props.children}</Select>;
});

export default SelectBase;
