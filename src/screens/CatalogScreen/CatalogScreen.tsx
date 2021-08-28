import React from 'react';
import { useTranslation } from 'react-i18next';
import { CategoryPropsTypes, ProductPropsTypes } from '../../App/types';
import CategoriesList from '../../components/Categories/CategoriesList';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
import { useCategories } from '../../components/Categories/hooks/useCategories';
import { useProducts } from '../../components/Products/hooks/useProducts';
import Wrapper from '../../components/common/Wrapper';

function CatalogScreen(): JSX.Element {
    const { t } = useTranslation();
    const categories: CategoryPropsTypes[] = useCategories();
    const products: ProductPropsTypes[] = useProducts();
    return (
        <Wrapper>
            <Wrapper><ProductsList products={products} /></Wrapper>
            <Wrapper><CategoriesList categories={categories} /></Wrapper>
        </Wrapper>
    )
}

export default CatalogScreen;