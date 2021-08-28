interface AppPropsTypes {}

export interface CategoryPropsTypes {
  _id: string;
  name: string;
  products?: { _id: string; name: string }[];
  subcategories?: { _id: string; name: string }[];
}

type CategoryPhotoType = { data: string; format: "string" };
type CategoryPhotoSizeType = "large" | "medium" | "small";

export interface CategoryPhotosPropsTypes {
  size: CategoryPhotoSizeType;
  images: CategoryPhotoType[];
}

export interface ProductPropsTypes {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  quantity: number;
  shipping?: boolean;
  sold: number;
  photo: any;
}

type ProductPhotoType = { data: string; format: "string" };
type ProductPhotoSizeType = "large" | "medium" | "small";

export interface ProductPhotosPropsTypes {
  size: ProductPhotoSizeType;
  images: ProductPhotoType[];
}
