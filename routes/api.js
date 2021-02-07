const express = require("express");
const mysql = require("mysql");
require("dotenv/config");

const router = express.Router();

const db = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected!");
});

router.get("/", (req, res) => {
    let sql = `SELECT l.name AS 'Lesson', c.graduate_year, c.parallel,
                    dow.name AS 'Day of the week',
                    ls.start_time AS 'Start', ls.finish_time AS 'Finish'
                FROM lesson_schedule ls
                INNER JOIN lesson l on ls.lesson_id = l.id
                INNER JOIN class c on ls.class_id = c.id
                INNER JOIN day_of_week dow on ls.day_of_week_id = dow.id
                ORDER BY dow.id, ls.start_time, ls.finish_time, l.name;`;
    db.query(sql)
        .then((rows) => {
            res.json(rows);
        })
        .catch((err) => {
            console.log("Error while executing query: " + err);
        });
});

module.exports = router;