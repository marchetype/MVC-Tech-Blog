const { Post } = require('../models');

const postData = [
    {
        title: "Post 1",
        content: "Here's the first example post.",
        user_id: 6
    },
    {
        title: "Post 2: The Sequel",
        content: "I'm just developing the world a little bit more; giving some context.",
        user_id: 5
    },
    {
        title: "Post 3: Running out of Steam",
        content: "I don't know about this any more.",
        user_id: 4

    },
    {
        title: "Post 4",
        content: "Here's the fourth example post.",
        user_id: 3
    },
    {
        title: "Post 5",
        content: "Here's the fifth example post.",
        user_id: 2
    },
    {
        title: "Post 6",
        content: "Here's the sixth example post.",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;