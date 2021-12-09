import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useNavigate } from 'react-router';
import Dialog from '../../components/Dialog';
import colorConstant from '../../constant/color';
import Banner from '../Banner';
import TopNav from '../TopNav';
const useStyles = makeStyles({
    root: {
        width: 'auto',
        position: "relative",
        backgroundColor: colorConstant.backgroundColor
    },
    dialog: {
        position: "absolute",
        top: "140px",
        left: "100px",
        maxWidth: "500px"
    }
});

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    
    return (
        <div className={classes.root}>
            <TopNav/>
            <div style={{marginBottom: "50px"}}></div>
            <Banner/>
            <div className={classes.dialog}>
                <Dialog title="High-Quality Furniture Just For You" description="Our furniture is made from selected and best quality materials that are suitable for your dream home" onClick={() => {navigate(`/product`)}}/>
            </div>
        </div>
    );
}

export default Header;