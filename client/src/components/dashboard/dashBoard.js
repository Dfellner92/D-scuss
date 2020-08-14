import React from "react";
import { Typography } from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles';
import styles from "./styles";

class Dashboard extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.main}>
                <div className={classes.message}>
                <Typography component="h1" variant="h4">Central Message Goes Here</Typography>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                   mollit anim id est laborum.</p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard); 