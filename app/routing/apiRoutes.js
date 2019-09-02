var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var match = {
            name: "",
            photo: "",
            difference: 1000
        };

        console.log(req.body);

        var data = req.body;
        var scores = data.scores;

        console.log(scores);

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            
            console.log(friends[i]);
            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= match.difference) {

                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = totalDifference;
                }
            }
        }

        friends.push(data);

        res.json(match);
    });
}