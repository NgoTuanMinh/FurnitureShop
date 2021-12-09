import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Banner1 from '../../images/Banner1.svg';
import Banner2 from '../../images/Banner2.svg';
import Banner3 from '../../images/Banner3.jpg';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    bannerItem: {
        height: '400px',
        flex: 1
    }
});

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.bannerItem} src={Banner1} alt="Banner1"/>
            <img className={classes.bannerItem} src={Banner2} alt="Banner2" style={{marginLeft: '20px'}}/>
            <img className={classes.bannerItem} src={Banner3} alt="Banner3" style={{marginLeft: '40px'}}/>
        </div>
    );
}

export default Banner;