var Friend = require("../../models/friend");
const router = require("express").Router();

router.post("/friends", function(req, res) {
    Friend.create(req.body)
      .then(friend => {
        res.status(200).json(friend)
        // .redirect("/")
      })
      .catch(function(err) {
          console.log(err)
        res.status(401).json(err)
        // .redirect('/login');
      });
  });

  module.exports = router;