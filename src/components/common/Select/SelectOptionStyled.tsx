import React from 'react';
import styled from 'styled-components';
import { OptionProps } from 'antd/lib/mentions';
import SelectOptionBase from './SelectOptionBase';

const SelectOptionStyled =
	styled(({ children, ...props }: OptionProps) => (
		<SelectOptionBase {...props}>{children && children}</SelectOptionBase>
	)) <OptionProps>
		``;

SelectOptionStyled.displayName = 'CustomComponentSelectOptionStyled';
export default SelectOptionStyled;
