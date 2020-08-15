import React from "react";
import Navbar from "../navbar/navBar";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

class Myprofile extends React.Component {

    render() {
        return(
            <div>
                <Navbar />
                <br/>
                <br/>
                <br/>
                <br/>
                <div>hello from myprofile</div>
            </div>
        )
    }
}

export default withStyles(styles)(Myprofile);