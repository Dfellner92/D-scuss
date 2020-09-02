import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import withStyles from '@material-ui/core/styles/withStyles';
import styles from "./styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from "@material-ui/core/Button";

class Footer extends React.Component {


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <div className={classes.content}>
                        <Typography>
                            <Button size="small" onClick={(() => window.location.href = "https://github.com/Dfellner92/D-scuss")} linkButton={true}>
                                <GitHubIcon></GitHubIcon>
                            </Button> 
                            <div className={classes.copywrite}>&copy; 2020 Delinger and Dan. All Rights Reserved.</div>    
                        </Typography>
                    </div>
                </AppBar>
            </React.Fragment>
        )
    }
};

export default withStyles(styles)(Footer);