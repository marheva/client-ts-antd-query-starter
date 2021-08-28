export interface CategoryPropsTypes {
  _id: string;
  name: string;
  products?: { _id: string; name: string }[];
  subcategories?: { _id: string; name: string }[];
}

export interface CategoryProductTypes {
  id: string;
  name: string;
  category: string;
}

export interface CategoryMediaImagesPropsTypes {
  data: string;
  format: string;
}

export interface CategoryImagePropsTypes {
  [key: string]: {
    [key: string]: { [key: string]: CategoryMediaImagesPropsTypes };
  };
}
