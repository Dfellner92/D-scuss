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
import ModalForm from "../modal/modal"

const firebase = require("firebase");




class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: "no"
        };
    }


    componentDidMount = () => {
        this.setState({ loggedIn: "yes" })
    }

    // updateNavbar = (userId) => {
    //     this.setState({
    //         user: userId
    //     })
    // }



    render() {
        console.log(this.props);
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link underline="none" color="inherit" href="/">D'scuss</Link>
                        </Typography>
                        <ModalForm></ModalForm>
                        {this.state.loggedIn === "no" ?
                            <Button color="inherit">
                                <Link underline="none" color="inherit" href="/" onClick={this.signOut}>Sign Out</Link>
                            </Button>

                            :
                            <div>
                                <Button color="inherit">
                                    <Link underline="none" color="inherit" href="/login">Login</Link>
                                </Button>
                                <Button color="inherit">
                                    <Link underline="none" color="inherit" href="/signUp">Sign Up</Link>
                                </Button>
                            </div>
                        }
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

    signOut = () => {
        this.setState({ loggedIn: "no" })
            .then(firebase.auth().signOut())
    }

}

export default withStyles(styles)(Navbar);