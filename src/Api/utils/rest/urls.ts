import { API_ENDPOINTS } from "../../../constants";

const urls = {
  auth: {
    getSession: API_ENDPOINTS.AUTH_ENDPOINTS.getSession,
    userLogin: API_ENDPOINTS.AUTH_ENDPOINTS.userLogin,
    userLogout: API_ENDPOINTS.AUTH_ENDPOINTS.userLogout,
  },
  user: {
    getUserInformation: API_ENDPOINTS.USER_ENDPOINTS.getUserInformation,
  },
  categories: {
    getCategoriesList: API_ENDPOINTS.CATEGORIES_ENDPOINTS.getCategoriesList,
    getCategoryPhotos: API_ENDPOINTS.CATEGORIES_ENDPOINTS.getCategoryPhotos,
  },
  products: {
    getProductsList: API_ENDPOINTS.PRODUCTS_ENDPOINTS.getProductsList,
    getProductPhoto: API_ENDPOINTS.PRODUCTS_ENDPOINTS.getProductPhotos,
  },
};

export default urls;
