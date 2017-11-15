var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var inMemoryDatabase = require("./in-memory-database");
var db = inMemoryDatabase();

app.use(bodyParser.json());


var items = [
    { name: "Fish", price: 20 },
    { name: "Carrots", price: 2.50 }
];
db.init(items);
// this is using the database directly, asking it to give me all the items

app.get("/api/items", function (req, res) {
    res.send(db.readAll());
});

app.get("/api/items/:id", function (req, res) {
    var id = req.params.id;
    res.send(db.read(id));
});

app.post("/api/items", function (req, res) {
    console.log(req.body);
    db.create(req.body);
    res.send("OK");
});

app.put("/api/items/:id", function (req, res) {
    var id = req.params.id;
    var item = req.body;
    db.update(id, item);
    res.send("UDPATE");
});

app.delete("/api/items/:id", function (req, res) {
    var id = req.params.id;
    db.delete(id);
    res.send("DELETED");
});


var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("App's server listening at http://localhost:%s", port);
});