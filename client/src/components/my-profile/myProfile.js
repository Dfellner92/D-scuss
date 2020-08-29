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
        this.getSavedBlogPosts(id);
    }
   
    getSavedBlogPosts = id => {
        API.getSavedBlogPosts(id)
          .then(res => {
              this.setState({ email: id})
              this.setState({ emailId: res.data[0]._id})
              this.setState({ blogPosts: res.data[0].blogPosts})
            }).catch(err => console.log(err));   
    };

    handleDelete = blogId =>  {
        API.deletePost(this.state.emailId, blogId, this.state.email).then(() => {
            const id = localStorage.getItem("id")
            this.getSavedBlogPosts(id)
        })
    }

    handleEdit = (blogId, emailId, email) =>  {
        console.log(blogId, emailId, email);
        API.updatePost(emailId, blogId).then(() => {
            const id = localStorage.getItem("id")
            this.getSavedBlogPosts(id)
        })
    }

    render() {

        return(
            <div>
                <Navbar getSavedBlogPosts={this.getSavedBlogPosts} />
                <br/>
                <br/>
                {this.state.blogPosts ? this.state.blogPosts.reverse().map(post =>
                    <BlogPost 
                        key={post._id} 
                        title={post.title}
                        date={post.date}
                        description={post.description}
                        blogId={post._id}
                        email={this.state.email}
                        emailId={this.state.emailId}
                        handleEdit={this.handleEdit}
                        handleDelete={this.handleDelete}
                        getSavedBlogPosts={this.getSavedBlogPosts}/>
                    ) : <p></p>
                }
            </div>
        )
    }
}

export default withStyles(styles)(Myprofile);