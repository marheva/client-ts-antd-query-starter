import { axiosInstance } from "../../axios";
import urls from "../urls";

export function getProductsList(
  sortBy?: string,
  order?: string,
  limit?: number
) {
  const url = `${urls.products.getProductsList}`;

  return axiosInstance({
    method: "GET",
    url,
    params: {
      sortBy: sortBy || "",
      order: order || "desc",
      limit: limit || 1,
    },
  });
}

export function getProductPhotos(productId: string, size?: string) {
  const url = `${urls.products.getProductPhoto}/${productId}`;

  return axiosInstance({
    method: "GET",
    url,
    params: {
      size: size,
    },
  });
}
