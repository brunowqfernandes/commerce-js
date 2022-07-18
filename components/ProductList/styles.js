import React from 'react';
import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    },
    listItem: {
        boxSizing: 'border-box',
        padding: 15,
        flex: '0 0 25%',
        textAlign: 'center',
    }
})

export default styles;