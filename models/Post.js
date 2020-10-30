const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    users: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        handle: {
            type: String
        }
    }],
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        handle: {
            type: String
        },
        text: {
            type: String
        }
    }],
    picture: {
        
        type: String,
        
    }

});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;