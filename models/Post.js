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
        type: Schema.Types.ObjectId,
        ref: "users"
    }]
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;