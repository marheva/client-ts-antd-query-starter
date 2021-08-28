import React from 'react';
import Card from '../../../common/Card';
import Picture from '../../../common/Picture';
import { CategoryCardPropsTypes } from './types';

function CategoryCard({ categoryId, categorySrcset, categoryName, onClick, children, ...props }: CategoryCardPropsTypes | any) {

    return (
        <Card
            cover={<Picture sources={categorySrcset} alt={`${categoryName} img.`} />}
            // onClick={!!onClick && onClick}
            {...props}
        >
            {children}
        </Card>
    );
}

export default CategoryCard;