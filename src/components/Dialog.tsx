import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ButtonComman from './Button';

interface DialogProps {
    title?: string,
    description?: string,
    onClick: () => void,
}
const useStyles = makeStyles({
    root: {
        width: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        padding: '48px',
    },
    title: {
        fontSize: 36,
        fontWeight: 700,
        marginBottom: '16px',

    },
    description: {
        color: '#898989',
        fontSize: 20,
        marginBottom: '48px'
    }
});

const Dialog = ({ title, description, onClick }: DialogProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.description}>
                {description}
            </div>
            <ButtonComman title='Shop Now' onClick={onClick}/>
        </div>
    );
}

export default Dialog;