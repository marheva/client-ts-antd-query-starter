import React, { useState } from 'react';
import { getCategoryPhotos } from '../../Api/utils/rest/categories/fetch';
import { useCategories, usePrefetchCategories } from '../Categories/hooks/useCategories';
import { usePrefetchCategoryPhotos } from '../Categories/hooks/useCategoryPhotos';

function CatalogInitialization({ children }: CatalogInitializationPropTypes): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true)

    // const categories = useCategories();

    return (
        <>
            {children}
            {/* {JSON.stringify(categories)} */}
        </>
    );

}

export default CatalogInitialization;