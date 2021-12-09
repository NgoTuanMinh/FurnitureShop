import { createSlice } from "@reduxjs/toolkit";
import { TListProductState, TProduct } from "./types";

const initialProduct: TProduct = {
    name: '',
    description: '',
    imgSrc: '',
    price: '',
    oldPrice: ''
}

const initialState: TListProductState = {
    listProduct: [],
    cartProducts: [],
    productDetail: initialProduct,
    loading: false
}

const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        getListProduct: state => {
            state.loading = true;
        },
        setListProduct: (state, action) => {
            state.listProduct = action.payload;            
        },
        setCartProduct: (state, action) => {
            state.cartProducts = action.payload;
        },
        setProductDetail: (state, action) => {
            state.productDetail = action.payload;
        },
        success: state => {
            state.loading = false;
        }
    }
})

export const { 
    getListProduct,
    setListProduct,
    setCartProduct,
    setProductDetail,
    success
} = productListSlice.actions;

export default productListSlice.reducer;