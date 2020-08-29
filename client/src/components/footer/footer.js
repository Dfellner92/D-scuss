import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import withStyles from '@material-ui/core/styles/withStyles';
import styles from "./styles";

class Footer extends React.Component {


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />

                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Typography className={classes.copywrite}>
                    &copy; 2020 Delinger and Dan. All Rights Reserved.
                    </Typography>
                </AppBar>
            </React.Fragment>
        )
    }
};

export default withStyles(styles)(Footer);