const db = require("../models");

module.exports = {
    findById: function(req, res) {
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
    }
}