import produce from 'immer';

const INITIAL_STATE = {
  loadingProducts: false,
  loadingCategories: false,
  errorProducts: false,
  errorCategories: false,
  categories: [],
  products: [],
  baseFilterproducts: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@products/LOAD_PRODUCTS_REQUEST': {
        draft.loadingProducts = true;
        draft.errorProducts = false;
        break;
      }
      case '@products/LOAD_PRODUCTS_SEARCH_REQUEST': {
        draft.loadingProducts = false;
        draft.products = action.payload.baseFilterproducts.filter(item => {
          return item.productName.indexOf(action.payload.search) !== -1;
        });
        break;
      }
      case '@products/LOAD_PRODUCTS_SUCCESS': {
        draft.loadingProducts = false;
        draft.products = action.payload.products;
        draft.baseFilterproducts = action.payload.products;
        break;
      }
      case '@products/LOAD_PRODUCTS_FAIL': {
        draft.loadingProducts = false;
        draft.errorProducts = true;
        break;
      }
      case '@categories/LOAD_CATEGORIES_REQUEST': {
        draft.loadingCategories = true;
        draft.errorCategories = false;
        break;
      }
      case '@categories/LOAD_CATEGORIES_SUCCESS': {
        draft.loadingCategories = false;
        draft.categories = action.payload.categories;
        break;
      }
      case '@categories/LOAD_CATEGORIES_FAIL': {
        draft.loadingCategories = false;
        draft.errorCategories = true;
        break;
      }
      default:
    }
  });
}
