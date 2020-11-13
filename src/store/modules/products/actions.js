export function loadProductsSearchRequest(baseFilterproducts, search) {
  return {
    type: '@products/LOAD_PRODUCTS_SEARCH_REQUEST',
    payload: { baseFilterproducts, search },
  };
}

export function loadProductsRequest(id) {
  return {
    type: '@products/LOAD_PRODUCTS_REQUEST',
    payload: { id },
  };
}

export function loadProductsError() {
  return {
    type: '@products/LOAD_PRODUCTS_FAIL',
  };
}

export function loadProductsSuccess(products, search) {
  return {
    type: '@products/LOAD_PRODUCTS_SUCCESS',
    payload: { products, search },
  };
}

export function loadCategoriesRequest() {
  return {
    type: '@categories/LOAD_CATEGORIES_REQUEST',
  };
}

export function loadCategoriesError() {
  return {
    type: '@categories/LOAD_CATEGORIES_FAIL',
  };
}

export function loadCategoriesSuccess(categories) {
  return {
    type: '@categories/LOAD_CATEGORIES_SUCCESS',
    payload: { categories },
  };
}
