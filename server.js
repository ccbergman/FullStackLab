var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var inMemoryDatabase = require("./in-memory-database");
var db = inMemoryDatabase();
var pg = require("pg");

var pool = new pg.Pool({
    user: "postgres",
    password: "Chelsea_1",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: false
});

app.use(bodyParser.json());

var items = [
    { name: "Fish", price: 20 },
    { name: "Carrots", price: 2.50 }
];

db.init(items);

app.get("/api/items", function (req, res) {
    pool.query("SELECT * FROM shopping_list").then(function (result) {
        res.send(result.rows);
    }).catch(function (error) {
        console.log(error);
        res.status(500);
        res.send("An error has been logged.");
    });
});

app.post("/api/items", function (req, res) {
    var item = req.body;
    var sql = "INSERT INTO shopping_list(item, price)" + "VALUES ($1::text, $2::real)";
    var values = [item.name, item.price];

    pool.query(sql, values).then(function () {
        res.status(201);
        res.send("INSERTED");
    });
});

app.delete("/api/items/:id", function (req, res) {
    var sql = "DELETE FROM shopping_list WHERE id=$1::int";
    var values = ["id"];

    pool.query(sql, values).then(function () {
        res.status(201);
        res.send("DELETED");
    });
});

app.put("/api/items/:id", function (req, res) {
    var id = req.params.id;
    var item = req.body;
    db.update(id, item);
    res.send("UDPATE");
});

var server = app.listen(5000, function () {
    var port = server.address().port;
    console.log("App's server listening at http://localhost:%s", port);
});