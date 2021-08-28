import { useQuery, useQueryClient } from 'react-query';

import { QUERY_KEYS } from '../../../constants';
import { getProductsList } from '../../../Api/utils/rest/products/fetch';
import { ProductPropsTypes } from '../../../App/types';


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

async function fetchProductsList(sortBy?: string, order?: string, limit?: number): Promise<ProductPropsTypes[] | { error: Error }> {
    const { data: { error, message, additional } } = {} = await getProductsList(sortBy, order, limit)
    if (error) return ({ error: message })
    return additional
};

export function useProducts(): ProductPropsTypes[] | any {
    const productsFallback: ProductPropsTypes[] = [];
    const { data = productsFallback } = useQuery(
        QUERY_KEYS.products,
        () => fetchProductsList(),
        commonFetchOptions,

    );
    return data;
}

export function usePrefetchProducts(): any {
    const queryClient = useQueryClient();
    queryClient.prefetchQuery(QUERY_KEYS.products, () => fetchProductsList(), commonPrefetchOptions);
}