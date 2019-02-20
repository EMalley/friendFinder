// require the friends array from friends.js
var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var difference = 50;
        var matchName = '';
        var matchPhoto = '';

        // loop through the friends data in firends.js
        friends.forEach(function (friend) {
            var matchedScoresArr = [];
            var totalDifference = 50;

            function add(total, num) {
                return total + num;
            }

            for (var i = 0; i < friend.scores.length; i++) {
                // math.abs returns an absolute number back.
                matchedScoresArr.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));
            }

            totalDifference = matchedScoresArr.reduce(add, 0);
            if (totalDifference < difference) {
                difference = totalDifference;
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });
        res.json({
            name:matchName,
            photo:matchPhoto
        });
// push new users to friends.js
        friends.push(req.body)
    });
}
