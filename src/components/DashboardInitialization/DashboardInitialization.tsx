import React, { useEffect, useState } from 'react';
import { usePrefetchCategories } from '../Categories/hooks/useCategories';
import { usePrefetchCategoryPhotos } from '../Categories/hooks/useCategoryPhotos';


function DashboardInitialization({ children }: DashboardInitializationPropTypes): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true)
    usePrefetchCategories();
    usePrefetchCategoryPhotos();
    return (
        <>
            {children}
        </>
    );

}

export default DashboardInitialization;