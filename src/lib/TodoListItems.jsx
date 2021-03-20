import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TodoListItems() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {[1, 2, 3, 4].map((value) => {
                const labelId = `lbl-${value}`;

                return (
                    <div>
                        <ListItem key={value} selected={value===1}>
                            <ListItemIcon>
                                <Checkbox edge="start" />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Task ${value} of my tasklist`} />

                        </ListItem>
                        <Divider />
                    </div>
                );
            })}
        </List>
    );
}
