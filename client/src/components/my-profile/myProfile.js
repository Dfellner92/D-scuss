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
            test:"hi",
            blogPosts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        this.getSavedBlogPosts(id);
    }

   
    getSavedBlogPosts = id => {
        console.log("id:", id)
        API.getSavedBlogPosts(id)
          .then(res => {
              console.log("DATA:", res.data)
              this.setState({ blogPosts: res.data[0].blogPosts})
            }).catch(err => console.log(err));

        console.log(this.state.blogPosts)       
    };

    render() {
        return(
            <div>
                <Navbar />
                <br/>
                <br/>
                <br/>
                <br/>
                <div>hello from myprofile</div>
                {this.state.blogPosts ? this.state.blogPosts.map(post =>
                    <BlogPost 
                        key={post._id} 
                        title={post.title}
                        date={post.date}
                        description={post.description}/>
                   
                    ) : <p></p>
                }
            </div>
        )
    }
}

export default withStyles(styles)(Myprofile);