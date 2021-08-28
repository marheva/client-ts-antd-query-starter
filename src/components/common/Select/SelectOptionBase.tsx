import React from 'react';
import { Select } from 'antd';
import { OptionProps } from 'antd/lib/mentions';

const { Option } = Select;

interface SelectOptionBaseProps {
	children: JSX.Element | any;
}

const SelectOptionBase = ({
	children,
	...props
}: React.PropsWithChildren<SelectOptionBaseProps & OptionProps>): JSX.Element => {
	return <Option {...props}>{children && children}</Option>;
};

export default SelectOptionBase;
