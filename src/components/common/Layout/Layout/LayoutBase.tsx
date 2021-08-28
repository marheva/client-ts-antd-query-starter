import React from 'react';
import { Layout } from 'antd';
import { LayoutCustomProps } from '../types';

const LayoutBase = ({ children, ...props }: LayoutCustomProps): JSX.Element => <Layout {...props}>{children && children}</Layout>;

export default LayoutBase;