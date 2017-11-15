/*************
  Simple CRUD database with a single collection.

  Usage:
  var tacoDatabase = require("./in-memory-database")();
  tacoDatabase.init([
    { name: "beef" }, { name: "chicken" }
  ]);
  tacoDatabase.readAll();
*/

module.exports = function () {

    var db = {}

    var collection = [];
    var nextId = 1;

    db.init = function (items) {
        collection = items.concat();
        collection.forEach(item => item.id = nextId++);
    };

    db.readAll = function () {
        return collection.concat();
    };

    db.read = function (id) {
        return collection.find(item => item.id == id);
    };

    db.create = function (item) {
        item.id = nextId++;
        collection.push(item);
    };

    db.update = function (id, item) {
        item.id = id;
        var pos = findIndex(id);
        if (pos !== -1) {
            collection[pos] = item;
        }
    };

    db.delete = function (id) {
        var pos = findIndex(id);
        if (pos !== -1) {
            collection.splice(pos, 1);
        }
    };

    function findIndex(id) {
        return collection.findIndex(item => item.id == id);
    }

    return db;
};
