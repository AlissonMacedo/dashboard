import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  loadProductsRequest,
  loadProductsError,
  loadProductsSuccess,
  loadCategoriesSuccess,
  loadCategoriesError,
} from './actions';

export function* loadingProducts({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(
      api.get,
      `products/getSubCategorie?idProductSubCategory=${id}`
    );

    yield put(loadProductsSuccess(response.data.products));
  } catch (error) {
    toast.error(`Erro ao listar os produtos`);
    yield put(loadProductsError());
  }
}

export function* loadingCategories() {
  try {
    const response = yield call(
      api.get,
      'productSubCategorie/getByProvider?idProvider=1'
    );
    yield put(loadCategoriesSuccess(response.data.productSubCategorie));
    yield put(
      loadProductsRequest(
        response.data.productSubCategorie[0].idProductSubCategory
      )
    );
  } catch (error) {
    toast.error(`Erro ao listar os produtos`);
    yield put(loadCategoriesError());
  }
}

export default all([
  takeLatest('@products/LOAD_PRODUCTS_REQUEST', loadingProducts),
  takeLatest('@categories/LOAD_CATEGORIES_REQUEST', loadingCategories),
]);
