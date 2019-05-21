var path = require('path');


module.exports = function (app) {


    // route to home page
    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname, "../public/friends.html"))
    });;

    //route to survey page
    app.get('/survey', function (request, response) {
        response.sendFile(path.join(__dirname, "../public/questions.html"))
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

};