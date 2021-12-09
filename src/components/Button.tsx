import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colorConstant from '../constant/color';

interface ButtonProps {
    onClick: () => void,
    title: string,
    style?: {}
}
const useStyles = makeStyles({
    root: {
        backgroundColor: colorConstant.orange,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        border: 'none',
        borderRadius: '4px',
        fontSize: 16,
        fontWeight: 500,
        height: '68px',
        cursor: 'pointer'
    }
});

const ButtonComman = ({ onClick, title, style }: ButtonProps) => {
    const classes = useStyles();
    return (
        <button className={classes.root} onClick={onClick} style={style}>{title}</button>
    );
}

export default ButtonComman;