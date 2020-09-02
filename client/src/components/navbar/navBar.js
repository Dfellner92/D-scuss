import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from '@material-ui/core/Link';
import styles from "./styles";
import ModalForm from "../modal/modal";
import API from "../../utils/API";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import "./paddingStyle.css";


const firebase = require("firebase");
class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false,
            emails: []
        };
    }

    componentDidMount = async () => {
        const status = await JSON.parse(localStorage.getItem("loggedIn"));
        console.log(status)
        await this.setState({ loggedIn: status })
        API.getUserEmails()
            .then(res => {
                res.data.map(async (user) => {
                    const array = [];
                    for (var i = 0; i < res.data.length; i++) {
                        array.push(res.data[i].email)
                    }
                    await this.setState({ emails: array })
                })
            })
            .catch(err => console.log(err))

    }

    renderSuggestions = () => {
        const { emails } = this.state;
        const { classes } = this.props;

        if (emails.length === 0) {
            return null
        }
        return (
            <ul className={classes.ul}>
                {emails.map((item) => <li className={classes.li} key={item}>{item}</li>)}
            </ul>
        )
    }

    goToOtherProfile = () => {
        const key = document.getElementById("searchIT").value
        console.log(key);
    }

    signOut = () => {
        firebase.auth().signOut()
    }

    render() {
        const { classes } = this.props;
        const email = localStorage.getItem("id");

        return (
            <div className={classes.root}>
                <AppBar className={classes.AppBar} position="static">
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
                                <Autocomplete
                                    className={classes.inputField}
                                    freeSolo
                                    id="searchIT"
                                    options={this.state.emails}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            color="primary"
                                            className={classes.textField}
                                            InputProps={{ ...params.InputProps, type: 'search' }}
                                        />)}
                                />
                                <Button color="inherit">
                                    <Link underline="none" color="inherit" onClick={this.goToOtherProfile} >Search</Link>
                                </Button>
                                <Button color="inherit">
                                    <Link underline="none" color="inherit" href={`/Myprofile/${email}`}>Home</Link>
                                </Button>
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