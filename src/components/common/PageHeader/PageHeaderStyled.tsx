import React from 'react';
import styled from 'styled-components';
import { APP_SIZES, APP_SPICING } from '../../../constants';
import { breakpoints } from '../../../styles';
import PageHeaderBase from './PageHeaderBase';

const { BREAKPOINT_SIZES, CONTAINER_SIZES } = APP_SIZES;
const { SPACING: { s4 } } = APP_SPICING;

const CSS_UNITS = "px"

const PageHeaderStyled = styled(PageHeaderBase)`
    &.ant-page-header {
        padding-left:0;
        padding-right:0;
    }
    .ant-page-header-heading {
        padding:0 ${s4 + 'px'};
        margin: 0 auto;
        ${breakpoints("max-width", CSS_UNITS, [
    { [BREAKPOINT_SIZES.md]: CONTAINER_SIZES.md },
    { [BREAKPOINT_SIZES.lg]: CONTAINER_SIZES.lg },
    { [BREAKPOINT_SIZES.xl]: CONTAINER_SIZES.xl },
    { [BREAKPOINT_SIZES.xxl]: CONTAINER_SIZES.xxl }], 'min-width'
)}
    }
    .ant-page-header-heading-left {
        width:100%;
    }
    .ant-page-header-heading-sub-title {
        display:inline-block;
        width:100%;
    }
`

PageHeaderStyled.displayName = 'CustomComponentStyledPageHeader';
export default PageHeaderStyled