import React, { useEffect, useMemo } from 'react';
import { useBreakpoint } from '../../../hooks';
import { APP_SIZES } from '../../../constants';
import CategoriesWrapper from './CategoryWrapper';
import { CategoryCard } from './CategoryCard';
import { useCategoryPhotos } from '../hooks/useCategoryPhotos';
import { categoryConfigurations } from '../../../configurations';
import { CategoryPhotosPropsTypes } from '../../../App/types';
import { CategoryItemPropsTypes } from './types';

function CategoryItem({ categoryId, categoryName, onClick, children, ...props }: CategoryItemPropsTypes): JSX.Element {
    const categoryPhotos: CategoryPhotosPropsTypes[] = useCategoryPhotos(categoryId);

    const categorySrcset = useMemo(() => {
        // FIXME: rewrite;
        const srcset: any = categoryPhotos.map(({ size, images }) => {
            return images.map(({ data, format }: { [key: string]: string }) => {
                return { srcset: data, media: categoryConfigurations.getCategoryImageMediaConfiguration[size], type: format }
            })
        })
        return srcset.flat();
    }, [categoryPhotos])

    return (
        <CategoriesWrapper>
            <CategoryCard
                categoryId={categoryId}
                categorySrcset={categorySrcset}
                categoryName={categoryName}
            // noContent
            >
                {categoryName}
            </CategoryCard>
        </CategoriesWrapper>
    );
}

export default CategoryItem;