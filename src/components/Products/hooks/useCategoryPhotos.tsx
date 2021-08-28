import { useQuery, useQueryClient } from 'react-query';
import { getProductPhotos } from '../../../Api/utils/rest/products/fetch';

import { CategoryPhotosPropsTypes, ProductPhotosPropsTypes, ProductPropsTypes } from '../../../App/types';
import { QUERY_KEYS } from '../../../constants';

import { useProducts } from './useProducts';

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

export async function fetchProductPhotoById(productId: string, size?: string): Promise<ProductPhotosPropsTypes[] | { error: Error }> {
    const { data: { error, message, additional } } = {} = await getProductPhotos(productId, size)
    if (error) return ({ error: message })
    return additional
};

export function useProductPhotos(productId: string): ProductPhotosPropsTypes[] | any {
    const productsPhotosFallback: ProductPropsTypes[] = [];
    const { data = productsPhotosFallback } = useQuery(
        QUERY_KEYS.productPhotos,
        () => fetchProductPhotoById(productId),
        commonFetchOptions,

    );
    return data;
}

export function usePrefetchProductPhotos(): void {
    const products: ProductPropsTypes[] = useProducts();
    const queryClient = useQueryClient();

    products.forEach(({ _id }) => {
        queryClient.prefetchQuery(QUERY_KEYS.productPhotos, () => fetchProductPhotoById(_id), commonPrefetchOptions);
    })
}
