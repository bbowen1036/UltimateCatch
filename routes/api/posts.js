const express = require("express");
const router = express.Router();
const Post = require("../../models/Post")
const passport = require("passport");
const validatePostInput = require("../../validation/posts")

router.get("/test", (req, res) => res.json({ msg: "This is the posts route" }));

router.get("/", (req, res) => {
    Post
        .find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err));
});

router.get("/user/:user_id", (req, res) => {
    Post 
        .find({ user: req.params.user_id })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
    Post
        .findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err));
});

router.post("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors } = validatePostInput(req.body) 
    
        if(!isValid){
            return res.status(400).json(errors);
        }
        // debugger
        const newPost = new Post({
            user: req.user.id,
            text: req.body.text
        });

        newPost
            .save()
            .then(post => res.json(post))
    }
)

// router.put('/:id', 
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//         console.log("reached inside of add likes to post")
//         // console.log(req)
//         console.log(req.params.id)
//         Post
//             .findById(req.params.id)
//             .then(post => post.likes.push(req.user._id))
//     }
// )

router.put('/:id', passport.authenticate("jwt", { session: false }),(req, res) => {
        console.log("reached inside of add likes to post")
        // console.log(req)
        console.log(req.params.id)
        Post
            .findByIdAndUpdate({_id: req.params.id}, { $push: {"likes": req.user._id}},
            function(err,post){
                if(err){
                    console.log(err)
                }else{
                    console.log("updated post:", post)
                }
            }
            ).then(post => res.json(post))
        // res.json(post)
    }
)

module.exports = router;