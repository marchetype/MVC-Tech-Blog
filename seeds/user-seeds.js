const { User } = require('../models');

const userData = [
    {
        username: "mark_barstow",
        email: "marko@gmail.com",
        password: "passworD123!"
    },
    {
        username: "frodo_baggins",
        email: "frodo_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "arnold_s",
        email: "terminator123@gmail.com",
        password: "GET2thach0ppA"
    },
    {
        username: "mario",
        email: "mario@gmail.com",
        password: "jumpMan64"
    },
    {
        username: "chris_pratt",
        email: "chrispbacon@gmail.com",
        password: "theR3alMario"
    },
    {
        username: "mom", 
        email: "mom@gmail.com",
        password: "m0m"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;