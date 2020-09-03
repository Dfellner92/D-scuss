import React from "react";
import Navbar from "../navbar/navBar";
import API from "../../utils/API";
import OtherBlogPost from "../otherblogpost/otherBlogPost";

class Otherprofile extends React.Component {

    constructor(){
        super();
        this.state = {
            email:"",
            blogPosts: [],
            emailId: "",
            otherId: ""
        }
    }



    componentDidMount() {
        const otherId = this.props.match.params.otherId;
        console.log(otherId);
        localStorage.setItem("otherId", otherId);
        this.getSavedBlogPosts(otherId);
    }
   // Pickup here
    getSavedBlogPosts = otherId => {
        console.log(otherId);
        API.getSavedBlogPosts(otherId)
          .then(res => {
              console.log(res.data);
              this.setState({ email: otherId})
              this.setState({ emailId: res.data[0]._id})
              this.setState({ blogPosts: res.data[0].blogPosts})
            }).catch(err => console.log(err));   
    };

    

    

    render() {

        return(
            <div>
                <Navbar getSavedBlogPosts={this.getSavedBlogPosts} />
                <br/>
                <br/>
                {this.state.blogPosts ? this.state.blogPosts.reverse().map(post =>
                    <OtherBlogPost 
                        key={post._id} 
                        title={post.title}
                        date={post.date}
                        description={post.description}
                        blogId={post._id}
                        email={this.state.email}
                        emailId={this.state.emailId}
                        getSavedBlogPosts={this.getSavedBlogPosts}/>
                    ) : <p></p>
                }
            </div>
        )
    }
}

export default (Otherprofile);