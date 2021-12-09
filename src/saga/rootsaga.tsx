import { all } from "@redux-saga/core/effects";
import ListProductSaga from "../container/MainPage/ProductPage/saga";

export default function* rootSaga() {
    yield all([
        ListProductSaga()
    ])
}