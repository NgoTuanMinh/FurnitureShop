import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import colorConstant from '../../../constant/color';
import CustomerSupport from '../../../icon/CustomerSupport.svg';
import Guarantee from '../../../icon/Guarantee.svg';
import ShippingIcon from '../../../icon/ShippingIcon.svg';
import TrophyIcon from '../../../icon/TrophyIcon.svg';
import CardProduct from '../components/CardProduct';
import { selectorCartProductsProductList, selectorListProductProductList } from './selector';
import { getListProduct, setCartProduct } from './slice';
import { TProduct } from './types';
interface FeatureProps {
    imgSrc: string,
    title: string,
    description: string
}

const useStyle = makeStyles({
    wrapFeatures: {
        display: 'flex',
        maxWidth: '1440px',
        margin: '0 auto',
        marginTop: '40px'
    },
    wrapFeature: {
        display: 'flex',
        flex: 1
    },
    wrapImgFeature: {

    },
    imgFeature: {
        margin: '22px',
    },
    wrapContentFeature: {
        // flex: 1,
        width: '100%',
        position: "relative",
    },
    titleFeature: {
        fontSize: 18,
        fontWeight: 'bold',
        position: "absolute",
        top: '16px',
        margin: 0
    },
    descriptionFeature: {
        fontSize: 16,
        position: "absolute",
        bottom: '16px',
        margin: 0
    },
    mL92: {
        marginLeft: '92px',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        color: colorConstant.black
    },
    wrapProducts: {
        margin: '0 auto',
        maxWidth: '1440px',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
    itemProduct: {
        width: '25%',
    }
})

const Feature = ({imgSrc, title, description}: FeatureProps) => {

    const classes = useStyle();

    return (
        <div className={classes.wrapFeature}>
            
            <div className={classes.wrapImgFeature}>
                <img className={classes.imgFeature} src={imgSrc} alt={title} />
            </div>

            <div className={classes.wrapContentFeature}>
                <p className={classes.titleFeature}>{title}</p>
                <p className={classes.descriptionFeature}>{description}</p>
            </div>

        </div>
    )
}

const features = [
    {
        title: 'Warrany Protection',
        description: 'Over 2 years',
        imgUrl: Guarantee
    },
    {
        title: 'Free Shipping',
        description: 'Order over 150 $',
        imgUrl: ShippingIcon
    },
    {
        title: '24 / 7 Support',
        description: 'Dedicated support',
        imgUrl: CustomerSupport
    },
    {
        title: 'High Quality',
        description: 'Crafted from top materials',
        imgUrl: TrophyIcon
    },
]

interface TItemProductProps {
    item: TProduct,
}

function ProductPage() {

    const classes = useStyle();
    const dispatch = useDispatch();
    
    const listProductGeted = useSelector(selectorListProductProductList);
    const listCartProduct = useSelector(selectorCartProductsProductList);

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        dispatch(getListProduct());
    }, [dispatch]);
    
    useEffect(() => {
        setListProduct(listProductGeted);
    }, [listProductGeted])    

    const ItemProduct = ({item}: TItemProductProps ) => {

        const addToCart = () => {
            let newListCartProduct = [...listCartProduct];
            const index = newListCartProduct.findIndex((product) => {
                return product.id === item.id;
            });
            if (index < 0) {
                let newProduct = {...item, quantity: 1};
                newListCartProduct.push(newProduct);
            } else {
                let oldProduct = newListCartProduct[index];
                let newProduct = {...oldProduct, quantity: oldProduct.quantity + 1};
                newListCartProduct[index] = newProduct;
            }
            dispatch(setCartProduct(newListCartProduct));
        }

        return (
            <div className={classes.itemProduct}>
                <CardProduct 
                    imgSrc={item.imgSrc} 
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    addToCart={addToCart}
                />
            </div>
        )
    }

    return (
        <>
            <div className={classes.wrapFeatures}>
                {features.map((feature, index) => (
                    <Feature imgSrc={feature.imgUrl} title={feature.title} description={feature.description} key={index} />
                ))}
            </div>

            <h5 className={classes.title}>Our Products</h5>

            <div className={classes.wrapProducts}>
                {listProduct.map((product: TProduct, idx) => <ItemProduct item={product} key={idx}/> )}
            </div>
        </>
    );
}

export default ProductPage;