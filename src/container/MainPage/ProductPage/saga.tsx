import { put, takeLatest } from 'redux-saga/effects';
import listProductJSON from '../../../constant/ProductList.json';
import { getListProduct, setListProduct } from './slice';

function* fetchListProduct() {
    try {
       const listProduct = listProductJSON;       
       yield put(setListProduct(listProduct));
    } catch (e) {
       console.log('error');
    }
 }

export default function* ListProductSaga() {
    yield takeLatest(getListProduct.type, fetchListProduct);
}
