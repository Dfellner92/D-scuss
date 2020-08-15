import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import styles from "./styles";

const firebase = require("firebase");




class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            yadayadayada: ""
        };
    }

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link underline="none" color="inherit" href="/">D'scuss</Link>
                        </Typography>
                        <Button color="inherit">
                            <Link underline="none" color="inherit" href="/login">Login</Link>
                        </Button>
                        <Button color="inherit">
                            <Link underline="none" color="inherit" href="/signUp">Sign Up</Link>
                        </Button>
                        {/* {   
                            this.state.serverError ?
                            <Button color="inherit">
                                <Link underline="none" color="inherit" onClick={this.signOut}>Sign Out</Link>
                            </Button> :
                            null
                        } */}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    signOut = () => firebase.auth().signOut();

}

export default withStyles(styles)(Navbar);