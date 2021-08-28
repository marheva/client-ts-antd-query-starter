import { useQuery, useQueryClient } from 'react-query';
import { CategoryPropsTypes } from './types';
import { QUERY_KEYS } from '../../../constants';
import { getCategoriesList } from '../../../Api/utils/rest/categories/fetch';

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

async function fetchCategoriesList(sortBy?: string, order?: string, limit?: number): Promise<CategoryPropsTypes[] | { error: Error }> {
    const { data: { error, message, additional } } = {} = await getCategoriesList(sortBy, order, limit)
    if (error) return ({ error: message })
    return additional
};

export function useCategories(): CategoryPropsTypes[] | any {
    const categoriesFallback: CategoryPropsTypes[] = [];
    const { data = categoriesFallback } = useQuery(
        QUERY_KEYS.categories,
        () => fetchCategoriesList(),
        commonFetchOptions,

    );
    return data;
}

export function usePrefetchCategories(): any {
    const queryClient = useQueryClient();
    queryClient.prefetchQuery(QUERY_KEYS.categories, () => fetchCategoriesList(), commonPrefetchOptions);
}