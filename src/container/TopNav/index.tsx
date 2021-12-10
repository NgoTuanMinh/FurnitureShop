import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import SearchInput from '../../components/SearchInput';
import colorConstant from '../../constant/color';
import AvatarIcon from '../../icon/AvatarIcon.svg';
import CartIcon from '../../icon/CartIcon.svg';
import HeartIcon from '../../icon/HeartIcon.svg';
import { selectorCartProductsProductList } from '../MainPage/ProductPage/selector';
import { TProduct } from '../MainPage/ProductPage/types';


const useStyles = makeStyles({
    root: {
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        padding: '40px',
        maxWidth: '1440px',
        margin: '0 auto',
    },
    logo: {
        fontSize: 24,
        fontWeight: 700,
    },
    menus: {
        color: '#898989',
        fontSize: '20px',
    },
    menuItem: {
        marginLeft: '40px',
        fontSize: '16px',
        color: colorConstant.black,
        cursor: 'pointer',

        '&.active': {
            color: '#000',
            fontWeight: 'bold'
        }
    },
    searchBar: {
        flex: 1,
        marginLeft: '40px'
    },
    rightBar: {
        display: 'flex'
    },
    rightBarItem: {
        marginLeft: '20px',
        cursor: 'pointer',
        paddingLeft: '20px'
    },
    wrapCart: {
        display: 'flex',
        position: 'relative',
    },
    numberProduct: {
        position: 'absolute',
        color: '#fff',
        backgroundColor: colorConstant.orange,
        top: '0',
        right: '-12px',
        minWidth: '20px',
        textAlign: 'center',
        fontSize: '12px',
        borderRadius: '12px',
        border: '1px solid #fff'
    },
    cartDialogWrap: {
        position: 'absolute',
        top: 'calc(100% + 6px)',
        width: '300px',
        right: '-50px',
    },
    cartDialog: {
        width: '100%',
        backgroundColor: '#fff',
        minHeight: '100px',
        padding: '12px',
        borderRadius: '6px',
        color: '#898989',
        boxShadow: '1px 1px #ccc',
        position: 'relative',

        '& p': {
            marginBottom: '24px'
        }
    },
    listCartItem: {
        marginBottom: '48px',
        overflowY: 'scroll',
        maxHeight: '250px',
    },
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: '12px',

        '&:hover': {
            backgroundColor: '#fffeee'
        }
    },
    imgProduct: {
        width: '40px',
        height: '40px',
        marginRight: '12px'
    },
    nameProduct: {
        flex: 1
    },
    priceProduct: {
        width: '90px',
        textAlign: 'right'
    },
    quantity: {
        width: '24px'
    },
    btnCart: {
        position: 'absolute',
        bottom: '12px',
        right: '12px',

        '& button': {
            backgroundColor: colorConstant.orange,
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer'
        }
    },
    arrowTop: {
        position: 'absolute',
        top: '-24px',
        right: '46px',
        width: '14px',
        height: '14px',
        border: '14px solid #fff',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent'
    },
    bridgeDialogCart: {
        position: 'absolute',
        top: '-12px',
        left: '0',
        width: '100%',
        height: '12px',
        backgroundColor: 'transparent'
    }
});

const routeArray = ["product", "tip-tricks"];

const TopNav = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    const [indexPage, setIndexPage] = useState<number>(0);
    const [showDialog, setShowDialog] = useState<boolean>(false);

    const listCartProduct = useSelector(selectorCartProductsProductList);

    const productNumber = useMemo(() => {
        return listCartProduct.reduce(
            (total: number, product: TProduct) => total + (product.quantity || 0)
            , 0);
    }, [listCartProduct]);

    const CartDialog = useCallback(() => {
        return (
            <div className={classes.cartDialog}
                onMouseEnter={handleShowDialog}
                onMouseLeave={handleHideDialog}
            >
                <div className={classes.bridgeDialogCart}></div>
                <div className={classes.arrowTop}></div>
                <p>Recently Added Products</p>
                <div className={classes.listCartItem}>
                    {listCartProduct.map((product: TProduct) => (
                        <div className={classes.cartItem} key={product.id}>
                            <img className={classes.imgProduct} src={product.imgSrc} alt={product.name}/>
                            <span className={classes.nameProduct}>{product.name}</span>
                            <span className={classes.quantity}>X{product.quantity || ''}</span>
                            <span className={classes.priceProduct}>{product.price || ''}</span>
                        </div>
                    ))}
                </div>
                <div className={classes.btnCart}>
                    <button>View Shopping Cart</button>
                </div>
            </div>
        )
    // eslint-disable-next-line
    }, [listCartProduct]);

    useEffect(() => {
        navigate(`/${routeArray[indexPage]}`);
    }, [indexPage, navigate]);
    
    const handleShowDialog = () => {
        setShowDialog(true);
    }

    const handleHideDialog = () => {
        setShowDialog(false);
    }

    return (
        <div className={classes.root}>
            <div className={classes.logo}>Tumingo.</div>

            <div className={classes.menus}>
                <span className={`${classes.menuItem} ${indexPage === 0 ? "active" : ""}`} onClick={() => setIndexPage(0)}>Products</span>
                <span className={`${classes.menuItem} ${indexPage === 1 ? "active" : ""}`} onClick={() => setIndexPage(1)}>Tip & tricks</span>
                <span className={`${classes.menuItem}`}>Inspirations</span>
            </div>

            <div className={classes.searchBar}>
                <SearchInput placeHolder='Search for minimalist chair'/>
            </div>

            <div className={classes.rightBar}>
                <img src={HeartIcon} alt="HeartIcon" className={classes.rightBarItem} />

                <div className={classes.wrapCart}>
                    <img src={CartIcon} alt="CartIcon" 
                        className={classes.rightBarItem} 
                        onMouseEnter={handleShowDialog}
                        onMouseLeave={handleHideDialog}
                    />
                    {productNumber>0 && <span className={classes.numberProduct}>{productNumber}</span>}
                    <div className={classes.cartDialogWrap}>
                        {showDialog && <CartDialog />}
                    </div>
                </div>

                <img src={AvatarIcon} alt="AvatarIcon" className={classes.rightBarItem} />
            </div>
        </div>
    );
}

export default TopNav;