// require the friends array from friends.js
var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })
}