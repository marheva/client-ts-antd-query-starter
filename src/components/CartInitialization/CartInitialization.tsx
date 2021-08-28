import React, { useState } from 'react';
import { usePrefetchCategories } from '../Categories/hooks/useCategories';
import { usePrefetchCategoryPhotos } from '../Categories/hooks/useCategoryPhotos';

function CartInitialization({ children }: CartInitializationPropTypes): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true)

    usePrefetchCategories();
    usePrefetchCategoryPhotos();

    return (
        <>
            {children}
            {/* {JSON.stringify(categories)} */}
        </>
    );

}

export default CartInitialization;