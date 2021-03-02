import * as React from "react";


import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
// Add Custome Style
const useStyles = makeStyles({
    link: {
        textDecoration: 'none'
    },
    icon: {
        width: '0.Sem',
        paddingLeft: 2,
    }
})

export const MyUrlField = ({ record = {}, source }) => {

    const classes = useStyles();
    return (
        <a href={record[source]} className={classes.link}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a>
    )
}
