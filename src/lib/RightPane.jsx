import { Grid, Typography, makeStyles, TextField, Button } from '@material-ui/core';
import 'date-fns';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        flexGrow: 1,
    },
    textArea: {
        width: "100%",
    }
}));

function RightPane(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        Task 1 of my tasklist
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        className={classes.textArea}
                        label="Description"
                        multiline
                        defaultValue="This is your third time attempting the behind-the-wheel. Get it done at-least this time."
                    />
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing = {2}>
                        <Grid item xs={12}>
                            <Typography variant="h6">
                                Due
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="filled-basic" label="10-10-2025" variant="filled" />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="p">
                                at
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="filled-basic" label="00:00 AM" variant="filled" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing = {2}>
                        <Grid item xs={12}>
                            <Typography variant="h6">
                                Reminders
                            </Typography>
                            <Button variant="contained" color="primary">
                                Add
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="filled-basic" label="09-10-2025" variant="filled" />
                        </Grid>
                        
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing = {2}>
                        <Grid item xs={12}>
                            <Typography variant="h6">
                                Labels
                            </Typography>
                            <Button variant="contained" color="primary">
                                Add
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="filled-basic" label="work" variant="filled" />
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default RightPane;