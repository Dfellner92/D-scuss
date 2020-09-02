const db = require("../models");
const { remove } = require("../models/blogUsers");
const mongoose = require('mongoose');

module.exports = {
  findAll: function(req, res) {
    console.log("findAll", req.params)
    db.blogUsers
      .find({ email: req.params.email})
      .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("from the controllor: ", req.body);
    db.blogUsers
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("blogId, emailId, email: ", 
      { blogId : req.params.blogId }, 
      { emailId : req.params.emailId }, 
      { email : req.params.email}
    );
    db.blogUsers.findOne({_id:req.params.emailId})
      .then((dbModel)=>{
        const blogPosts = JSON.parse(JSON.stringify(dbModel.blogPosts));
        const updatedPosts = blogPosts.filter((element)=>{
          console.log(element);
          return element._id !== req.params.blogId;
        })
        console.log("updatedposts", updatedPosts);
        db.blogUsers.findOneAndUpdate({_id:req.params.emailId}, {blogPosts:updatedPosts},{new:true})
        .then((dbModel)=>{res.json(dbModel)})
      })
  },
  update: function(req, res) {
    console.log("post: ", { post : req.body } );
    db.blogUsers
      .findOne({_id: req.params.emailId})
      .then((dbModel) => {
        const blogPosts = JSON.parse(JSON.stringify(dbModel.blogPosts));
        console.log("post(s) of sometype: ", req.body)
        const updatedPost = ({
              _id: req.body._id,
              title: req.body.title,
              description: req.body.description,
              date: new Date(),
              __v: 0
        })
        const unchangedPosts = blogPosts.filter((element)=>{
          return element._id !== req.params.blogId;
        })
        console.log("we'll be leaving these as is: ", unchangedPosts)
        console.log("this is the updated post we need to push: ", updatedPost)
        unchangedPosts.push(updatedPost)
        console.log("hopefully this is what we want: ", unchangedPosts)
        db.blogUsers.findOneAndUpdate({_id:req.params.emailId}, {blogPosts:unchangedPosts},{new:true})
        .then((dbModel)=>{res.json(dbModel)})
      })
  },
  findAllEmails: function(req, res) {
    db.blogUsers
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};