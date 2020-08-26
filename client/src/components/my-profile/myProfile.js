import React from "react";
import Navbar from "../navbar/navBar";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import API from "../../utils/API";
import BlogPost from "../blogpost/blogPost";

class Myprofile extends React.Component {

    constructor(){
        super();
        this.state = {
            email:"",
            blogPosts: [],
            emailId: ""
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        localStorage.setItem("id", id);
        localStorage.setItem("loggedIn", "yes");
        this.getSavedBlogPosts(id);
        this.props.getCurrentUserId(id);
    }

   
    getSavedBlogPosts = id => {
        console.log("id:", id)
        API.getSavedBlogPosts(id)
          .then(res => {
              console.log("DATA:", res.data)
              this.setState({ email: id})
              this.setState({ emailId: res.data[0]._id})
              this.setState({ blogPosts: res.data[0].blogPosts})
            }).catch(err => console.log(err));

        console.log(this.state.blogPosts)       
    };

    handleDelete = blogId =>  {
        //const filteredBlogPosts = this.state.blogPosts.filter(post => post._id !== id)
        //this.setState({blogPosts : filteredBlogPosts});
        console.log(blogId, this.state.emailId);

        // if (this.state.blogPosts) {
        //     this.state.blogPosts.map(
        //         post => API.deletePost(this.state.email, blogId, this.state.emailId, post._id)
        //     )} else {
        //         return                
        // }

        API.deletePost(this.state.emailId, blogId, this.state.email).then(
            //this.componentDidMount()
        )

        

    }

    // destructureBlogPosts = () => {
    //     this.state.blogPosts.map(
    //         post => {
    //             post._id

    //         })
    //         .then()
    //     )
    // }



    render() {
        return(
            <div>
                <Navbar />
                <br/>
                <br/>
                <br/>
                <br/>
                {this.state.blogPosts ? this.state.blogPosts.map(post =>
                    <BlogPost 
                        key={post._id} 
                        title={post.title}
                        date={post.date}
                        description={post.description}
                        blogId={post._id}
                        emailId={this.state.emailId}
                        handleDelete={this.handleDelete}/>
                    ) : <p></p>
                }
            </div>
        )
    }
}

export default withStyles(styles)(Myprofile);