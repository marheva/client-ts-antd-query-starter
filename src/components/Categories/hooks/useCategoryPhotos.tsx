import { useQuery, useQueryClient } from 'react-query';
import { getCategoryPhotos } from '../../../Api/utils/rest/categories/fetch';
import { CategoryPhotosPropsTypes } from '../../../App/types';
import { QUERY_KEYS } from '../../../constants';
import { CategoryPropsTypes } from './types';
import { useCategories } from './useCategories';

const commonFetchOptions = {
    staleTime: 600000,
    cacheTime: 900000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
};

const commonPrefetchOptions = {
    staleTime: 600000,
    cacheTime: 900000,
};

export async function fetchCategoryPhotoById(categoryId: string, size?: string): Promise<CategoryPhotosPropsTypes[] | { error: Error }> {
    const { data: { error, message, additional } } = {} = await getCategoryPhotos(categoryId, size)
    if (error) return ({ error: message })
    return additional
};

export function useCategoryPhotos(categoryId: string): CategoryPhotosPropsTypes[] | any {
    const categoriesPhotosFallback: CategoryPropsTypes[] = [];
    const { data = categoriesPhotosFallback } = useQuery(
        QUERY_KEYS.categoryPhotos,
        () => fetchCategoryPhotoById(categoryId),
        commonFetchOptions,

    );
    return data;
}

export function usePrefetchCategoryPhotos(): void {
    const categories: CategoryPropsTypes[] = useCategories();
    const queryClient = useQueryClient();

    categories.forEach(({ _id }) => {
        queryClient.prefetchQuery(QUERY_KEYS.categoryPhotos, () => fetchCategoryPhotoById(_id), commonPrefetchOptions);
    })
}
