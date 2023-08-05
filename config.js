const mysql = require('mysql');
mysql.createConnection(({
    host: "locahost",
    user: "peshrawx",
    password: "5RJ1qo]6jYx)K1",
    port: "3306"
}));

const conn = mysql.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log("connected!")
})
module.exports = conn;