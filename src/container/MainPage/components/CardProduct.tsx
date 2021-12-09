import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import colorConstant from '../../../constant/color';
import LikeIcon from '../../../icon/LikeIcon.svg';
import ShareIcon from '../../../icon/ShareIcon.svg';


interface CardProductProps {
    imgSrc: string,
    name: string,
    description: string,
    price: string,
    oldPrice?: string,
    id?: string,
    addToCart?: () => void
}


const useStyles = makeStyles({
    root: {
        width: 'auto',
        maxWidth: '1440px',
        margin: '12px',
        position: 'relative',
        paddingBottom: '32px',
        transition: 'all 0.8s ease-in 0.8s'
    },
    wrapImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    img: {
        height: '300px',
        width: '100%',
        objectFit: 'cover'
    },
    wrapContent: {
        marginTop: 16,
        padding: '0 16px',
        backgroundColor: '#F4F5F7'
    },
    nameProduct: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colorConstant.black,
        marginBottom: 8,
        lineHeight: '32px'
    },
    descriptionProduct: {
        fontSize: 16,
        color: colorConstant.gray3,
        marginBottom: 8,
        lineHeight: '24px',
    },
    wrapPrice: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    priceProduct: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colorConstant.black
    },
    oldPriceProduct: {
        fontSize: 16,
        color: colorConstant.gray4
    },
    dialogBackground: {
        position: 'absolute',
        width: '100%',
        heigh: '100%',
        top: 0,
        left: 0,
        backgroundColor: '#3A3A3A',
        height: '100%',
        opacity: '0.72',
    },
    dialogWrap: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.8s ease-in 0.8s'
    },
    dialogWrapItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 24px',
        cursor: 'pointer',
    },
    dialogContent: {
       
    },
    dialogButton: {
        width: '200px',
        backgroundColor: '#fff',
        border: 'none',
        color: colorConstant.orange,
        height: '48px',
        zIndex: 10,
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
    },
    dialogItem: {
        display: 'flex',
        marginTop: '24px',
        justifyContent: 'space-between',
        zIndex: 10
    },
    dialogItemIcon: {

    },
    dialogItemContent: {
        color: '#fff',
        marginLeft: '4px'
    },
    dialogItemImg: {
        width: '24px',
        height: '24px',
    }
});

const CardProduct = ({imgSrc, name, description, price, oldPrice, addToCart }: CardProductProps) => {
    
    const classes = useStyles();
    
    const [showDialog, setShowDialog] = useState<boolean>(false);
    
    const handleAddProduct = () => {
        addToCart && addToCart();
    }

    return (
        <div className={classes.root} 
            onMouseEnter={() => setShowDialog(true)} 
            onMouseLeave={() => setShowDialog(false)}
        >
            <div className={classes.wrapImg}>
                <img className={classes.img} src={imgSrc} alt={name} />
            </div>

            <div className={classes.wrapContent}>
                <p className={classes.nameProduct}>{name}</p>
                <p className={classes.descriptionProduct}>{description}</p>

                <div className={classes.wrapPrice}>
                    <p className={classes.priceProduct}>{price}</p>
                    <p className={classes.oldPriceProduct}>{oldPrice}</p>
                </div>
            </div>

            {showDialog && <div className={classes.dialogWrap}>
                <div className={classes.dialogBackground}></div>

                <button className={classes.dialogButton} onClick={handleAddProduct}>
                    Add to cart
                </button>

                <div className={classes.dialogItem}>
                    <div className={classes.dialogWrapItem}>
                        <img className={classes.dialogItemImg} src={ShareIcon} alt="Share"/>
                        <span className={classes.dialogItemContent}>Share</span>
                    </div>
                    <div className={classes.dialogWrapItem}>
                        <img className={classes.dialogItemImg} src={LikeIcon} alt="Share"/>
                        <span className={classes.dialogItemContent}>Like</span>
                    </div>
                </div>

            </div>}

        </div>
    );
}

export default CardProduct;