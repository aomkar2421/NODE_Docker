const express = require('express');
const cors = require('cors')
const mysql = require('mysql2')

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mern"
});

// db.connect((err) => {
//     if (err) {
//         console.error("Database connection failed:", err);
//     } else {
//         console.log("Connected to MySQL database.");
//     }
// });


app.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json(err);
        } else {
            return res.json(data);
        }
    });
});

app.get('/:id', (req, res) => {
    const sql = "SELECT * FROM users where id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json(err);
        } else {
            return res.json(data);
        }
    });
});

app.post('/create', (req, resp) => {
    const sql = "insert into users (`name`, `email`, `phone`) values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return resp.status(500).json(err);
        } else {
            return resp.json(data);
        }
    })
})

app.put('/update/:id', (req, resp) => {
    const id = req.params.id;
    const sql = "update users set `name`=?, `email`=?, `phone`=? where id=? ";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        id
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return resp.status(500).json(err);
        } else {
            return resp.json(data);
        }
    })
})

app.delete(`/delete/:id`, (req, resp) => {
    const sql = "delete from users where id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data)=>{
        if (err) {
            console.error("Error executing query:", err);
            return resp.status(500).json(err);
        } else {
            console.log("deleted")
            return resp.json("Deleted");

        }
    })
})

app.listen(4500, () => {
    console.log("Server started");
})