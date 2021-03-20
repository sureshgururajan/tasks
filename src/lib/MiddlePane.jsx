import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import TodoListItems from './TodoListItems';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        flexGrow: 1,
    },
}));

function MiddlePane(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row">
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Inbox
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TodoListItems />
                </Grid>
            </Grid>
        </div>
    );
}

export default MiddlePane;