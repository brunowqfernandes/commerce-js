import React from 'react';
import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    header: {
        background: '#cecece',
        boxShadow: '1px 1px 10px 1px rgba(129,129,136,0.6)',
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menu: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    }
})

export default styles;