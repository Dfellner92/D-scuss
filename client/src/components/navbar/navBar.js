import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from '@material-ui/core/Link';
import styles from "./styles";
import ModalForm from "../modal/modal";
import countries from "../../utils/countriesAPI";

const firebase = require("firebase");




class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
    }

    componentDidMount = async () => {
        const status = await JSON.parse(localStorage.getItem("loggedIn"));
        await this.setState({ loggedIn: status })
    }

    signOut = () => {
        firebase.auth().signOut()
    }   

    render() {
        const { classes } = this.props;
        const email = localStorage.getItem("id");

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            D'Scuss 
                            {this.state.loggedIn ?
                                <React.Fragment>{" it, " + email + "!"}</React.Fragment> :
                                null
                            }
                        </Typography>
                        
                        {this.state.loggedIn ?
                            <div className={classes.align}>
                            <ModalForm getSavedBlogPosts={this.props.getSavedBlogPosts}></ModalForm>
                            <Button color="inherit">
                                <Link underline="none" color="inherit" href="/" onClick={this.signOut}>Sign Out</Link>
                            </Button>
                            </div>
                            :
                            <div>
                                <Button color="inherit">
                                    <Link underline="none" color="inherit" href="/signUp">Sign Up</Link>
                                </Button>
                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);