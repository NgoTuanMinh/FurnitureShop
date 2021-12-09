import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Location from '../../icon/Location.svg';
import EnterEmail from '../../icon/EnterEmail.svg';
import colorConstant from '../../constant/color';
import Call from '../../icon/Call.svg';
import CategoryList from '../../constant/Category.json';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        maxWidth: '1440px',
        padding: '0 12px',
        margin: '0 auto',

        '& h3': {
            margin: 0,
            marginBottom: '16px',
            fontSize: '24px'
        },

        '& p': {
            color: '#616161',
            cursor: 'pointer',
            padding: '8px 0'
        }
    },
    infoCompany: {
        width: '25%',
        padding: '12px'
    },
    locationWrap: {
        display: 'flex',
    },
    location: {
        marginRight: '8px'
    },
    categoryWrap: {
        display: 'flex',
        width: '50%',
        padding: '12px',
    },
    category: {
        flex: 1,

    },
    stayUpdatedWrap: {
        width: '25%',
        padding: '12px'
    },
    enterEmail: {
        display: 'flex',
        width: '100%',
        
        "& input": {
            outline: 'none',
            backgroundColor: '#F4F5F7',
            height: '45px',
            width: '80%',
            flex: 1,
            border: 'none',
            marginRight: '4px',
            borderRadias: '8px',
            padding: '0 12px'
        },

        '& button': {
            backgroundColor: colorConstant.orange,
            width: '45px',
            height: '45px',
            border: 'none',
            cursor: 'pointer'
        }
    }
})

function Footer() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.infoCompany}>
                <h3>Tumingo.</h3>
                <p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
                <div className={classes.locationWrap}>
                    <img className={classes.location} src={Location} alt="location icon" />
                    <p>Sawojajar Malang, Indonesia</p>
                </div>
                <div className={classes.locationWrap}>
                    <img className={classes.location} src={Call} alt="call icon" />
                    <p>+6289 456 3455</p>
                </div>
                <p>www.funiro.com</p>
            </div>

            <div className={classes.categoryWrap}>
                {CategoryList.map((category) => (
                    <div className={classes.category}>
                        <h3>{category.categoryName}</h3>
                        {category.subCategory.length > 0 && 
                            category.subCategory.map((subCategory) => <p>{subCategory}</p>)
                        }
                    </div>
                ))}
            </div>

            <div className={classes.stayUpdatedWrap}>
                <h3>Stay Updated</h3>
                <div className={classes.enterEmail}>
                    <input type="text" placeholder='Enter your email'/>
                    <button>
                        <img src={EnterEmail} alt="send email" />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Footer;