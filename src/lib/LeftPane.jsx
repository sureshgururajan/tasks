import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ListIcon from '@material-ui/icons/List';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LabelIcon from '@material-ui/icons/Label';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: 200,
        maxWidth: 260,
    },
    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(0.5),
        },
    }
}));

export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main">
                <ListItem button>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Tasks" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <TodayIcon />
                    </ListItemIcon>
                    <ListItemText primary="Today" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DateRangeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Next 7 Days" />
                </ListItem>
                <ListItem button selected={true}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
            </List>
            <Divider variant="middle" />
            <List component="nav" aria-label="secondary">
                <ListItem button >
                    <ListItemIcon>
                        <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Labels" />
                </ListItem>
            </List>
            <Divider variant="middle" />
            <List component="nav" aria-label="lists">
                <div className={classes.chips}>
                    <Chip label="Personal" clickable color="primary"/>
                    <Chip label="Work" clickable color="primary"/>
                    <Chip label="Learning" clickable color="primary"/>
                    <Chip label="Fun" clickable color="primary"/>
                    <Chip label="Movies" clickable color="primary"/>
                </div>
            </List>
            <Divider variant="middle" />
            <List component="nav" aria-label="lists">
                <ListItem button >
                    <ListItemIcon>
                        <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lists" />
                </ListItem>
            </List>
            <Divider variant="middle" />
            <List component="nav">
                <ListItem button >
                    <ListItemText primary="Shopping" />
                </ListItem>
                <ListItem button >
                    <ListItemText primary="Year end goals" />
                </ListItem>
                <ListItem button >
                    <ListItemText primary="Move-in checklist" />
                </ListItem>
                <ListItem button >
                    <ListItemText primary="Travel documents" />
                </ListItem>
            </List>
        </div>
    );
}
