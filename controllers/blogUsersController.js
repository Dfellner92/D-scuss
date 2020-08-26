const db = require("../models");
const { remove } = require("../models/blogUsers");
const mongoose = require('mongoose');

// Defining methods for the booksController
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
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
 
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
          return element._id !== req.params.blogId;
        })
        console.log("updatedposts", updatedPosts);
        db.blogUsers.findOneAndUpdate({_id:req.params.emailId}, {blogPosts:updatedPosts},{new:true})
        .then((dbModel)=>{
          console.log("success");
          res.json(dbModel)
        })

      })
  }
};