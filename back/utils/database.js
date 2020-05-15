var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "customer_mng"
});

module.exports = con.promise();