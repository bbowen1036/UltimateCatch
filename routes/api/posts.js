const express = require("express");
const router = express.Router();
const passport = require("passport");
const validatePostInput = require("../../validation/posts")

router.get("/test", (req, res) => res.json({ msg: "This is the posts route" }));

router.post("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors } = validatePostInpute(req.body) 
    
        if(!isValid){
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            user: req.user.id,
            text: req.body.text
        });

        newPost
            .save()
            .then(post => res.json(post))
    }
)

module.exports = router;