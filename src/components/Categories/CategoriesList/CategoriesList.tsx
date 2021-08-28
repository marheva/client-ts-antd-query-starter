import React from 'react';
import { Col, Row } from 'antd';
import { CategoriesListPropsTypes } from './types';
import Wrapper from '../../common/Wrapper';
import CategoryItem from '../CategoryItem';

function CategoriesList({ categories, ...props }: CategoriesListPropsTypes): JSX.Element {

    return (
        <Wrapper>
            <Row gutter={[16, 16]}>
                {categories?.map(({ _id, name }) => (
                    <Col key={_id}>
                        <CategoryItem categoryId={_id} categoryName={name} />
                    </Col>
                ))}
            </Row>
        </Wrapper>
    );
};

export default CategoriesList;