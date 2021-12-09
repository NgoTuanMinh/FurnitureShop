import { createSelector } from "reselect";

const productList = (state: any) => state.listProduct;

const selectorLoadingProductList = createSelector(productList, (substate) => substate.loading);
const selectorListProductProductList = createSelector(productList, (substate) => {
    return substate.listProduct;
});
const selectorCartProductsProductList = createSelector(productList, (substate) => substate.cartProducts);
const selectorProductDetailProductList = createSelector(productList, (substate) => substate.productDetail);

export {
    productList,
    selectorCartProductsProductList,
    selectorListProductProductList,
    selectorLoadingProductList,
    selectorProductDetailProductList,
};
