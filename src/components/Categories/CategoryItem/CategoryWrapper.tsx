import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../common/Wrapper';

const CategoriesWrapper = styled(Wrapper)`
    padding: 1rem ;
    & > div {
        justify-content:center;
    }
`;

export default CategoriesWrapper;