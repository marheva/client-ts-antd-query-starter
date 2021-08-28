import React from 'react';
import { Col, Row } from 'antd';
import { ProductsListPropsTypes } from './types';
import Wrapper from '../../common/Wrapper';

function CategoriesList({ products, ...props }: ProductsListPropsTypes): JSX.Element {


    return (
        <Wrapper>
            <Row gutter={[16, 16]}>
                {/* {categories?.map(({ _id, name }) => (
                    <Col key={_id}>
                        <CategoryItem categoryId={_id} categoryName={name} />
                    </Col>
                ))} */}
            </Row>
        </Wrapper>
    );
};

export default CategoriesList;