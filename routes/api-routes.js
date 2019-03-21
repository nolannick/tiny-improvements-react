const Kudos = require("../models/Kudos");
const User = require("../models/User");


module.exports = function (app) {

    //route to retrieve all kudos
    app.get("/api/kudos", function (req, res) {
        Kudos.find()
        .populate('sender')
        .populate('receiver')
        .then(function (allKudos) {
            res.json(allKudos);
        })
        .catch(function (error) {
            res.jason({ error: error });
        });
    });

    //route to retrieve all users
    app.get("/api/users", function (req, res) {
        User.find().then(function (allUsers) {
            res.json(allUsers);
        }).catch(function (error) {
            res.jason({ error: error });
        });
    });

    //route to post a post
    app.post("/api/kudos", function (req, res) {
        Kudos.create(req.body)
            .then(function (newKudos) {
                res.json(newKudos);
            }).catch(function (error) {
                res.json({ error: error });
            });

    });

    app.post("/api/users", function (req, res) {
        User.create(req.body)
            .then(function (newUser) {
                res.json(newUser);
            }).catch(function (error) {
                res.jason({ error: error });
            });
    });
};