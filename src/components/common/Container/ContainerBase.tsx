import React from 'react';
import { ContainerProps } from './types';

const ContainerBase = ({ children, fluid, ...props }: ContainerProps): JSX.Element => <div {...props}>{children && children}</div>;

export default ContainerBase;