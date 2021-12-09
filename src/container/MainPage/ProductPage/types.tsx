export interface TListProductState {
    listProduct: Array<TProduct>,
    cartProducts: Array<TProduct>,
    productDetail: TProduct,
    loading: boolean
}

export interface TProduct {
    name: string,
    imgSrc: string,
    description: string,
    price: string,
    oldPrice?: string,
    quantity?: number,
    id?: string
}