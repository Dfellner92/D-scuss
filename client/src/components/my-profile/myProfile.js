import React from "react";
import Navbar from "../navbar/navBar";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

class Myprofile extends React.Component {

    constructor(){
        super();
        this.state = {
            blogPosts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        this.fetchData(id);
    }

    fetchData = id => {
        console.log(id);
    }

    

    

    // componentDidMount = () => {
    //     firebase.auth().onAuthStateChanged(async _usr => {
    //         if(!_usr)
    //             this.props.history.push('/login');
    //         else {
    //             await API
    //                 .get()
    //                 .collection('chats')
    //                 .where('users', 'array-contains', _usr.email)
    //                 .onSnapshot(async res => {
    //                     const chats = res.docs.map(_doc => _doc.data());
    //                     await this.setState({
    //                         email: _usr.email,
    //                         chats: chats
    //                     });
    //                     console.log(this.state);
    //                 })
    //         }
    //     })



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