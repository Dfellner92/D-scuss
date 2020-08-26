const db = require("../models");

module.exports = {
    findById: function(req, res) {
      console.log("findById", req.params)
        db.blogUsers
          .findOne({email : req.params.id })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.json(err));
    },
    createPost: function(req, res) {
        console.log(req.params.id)
        db.blogPosts
          .create(req.body)
          .then(dbpost => {
            db.blogUsers.findOneAndUpdate({ email : req.params.id}, {$push : { blogPosts : dbpost }}, {new : true})
            .then(dbUser => res.json(dbUser))
          })
          .catch(err => res.status(422).json(err));
    },
    removePost: function(req, res) {
      console.log("findONE", req.params)
        db.blogUsers
          .findOne({email: req.params.id })
        
        

        // email-id
        // blog-post-id
        // console log those

        // find where id =email-id
        // delete from blogpost field where id = blog-post-id


        // db.blogUsers
        // .findOneAndDelete({ blogPosts: req.params._id }, {$pull : { blogPosts : req.params.id }}, {useFindandModify: false})
        // .then(dbModel => dbModel.remove())
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
    }
}