export interface ProductPropsTypes {
  _id: string;
  name: string;
  products?: { _id: string; name: string }[];
  subcategories?: { _id: string; name: string }[];
}

export interface ProductProductTypes {
  id: string;
  name: string;
  Product: string;
}

export interface ProductMediaImagesPropsTypes {
  data: string;
  format: string;
}

export interface ProductImagePropsTypes {
  [key: string]: {
    [key: string]: { [key: string]: ProductMediaImagesPropsTypes };
  };
}
