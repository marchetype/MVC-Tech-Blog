const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_body: "Comment1"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_body: "Comment2"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_body: "Comment3"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_body: "Comment4"
    },
    {
        user_id: 5,
        post_id: 5,
        comment_body: "Comment5"
    },
    {
        user_id: 6,
        post_id: 6,
        comment_body: "Comment6"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;