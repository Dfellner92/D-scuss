import React from "react";
import { Typography } from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles';
import styles from "./styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

class Dashboard extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h5">
                Oh!, Hey there!. Want to login?
                </Typography>
              <form  className={classes.form}>
                <Button fullWidth variant='contained' color='primary' className={classes.submit} href="/login">Log In</Button>
              </form>
            </Paper>
          </main>
        )
    }
}

export default withStyles(styles)(Dashboard); 