import { axiosInstance } from "../../axios";
import urls from "../urls";

export function getCategoriesList(
  sortBy?: string,
  order?: string,
  limit?: number
) {
  const url = `${urls.categories.getCategoriesList}`;

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

export function getCategoryPhotos(categoryId: string, size?: string) {
  const url = `${urls.categories.getCategoryPhotos}/${categoryId}`;

  return axiosInstance({
    method: "GET",
    url,
    params: {
      size: size,
    },
  });
}
