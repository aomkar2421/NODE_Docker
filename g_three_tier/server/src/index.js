const express = require('express');
const cors = require('cors')
const mysql = require('mysql2')

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


db.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database : " , err.message);
    } else {
        // console.log("Successfully connected to the MySQL database.\n\n\n");
        console.log("Successfully connected to the MySQL database.");
        connection.release();
    }
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json("Error Occured");
        } else {
            return res.status(200).json(data);
        }
    });
});

app.get('/:id', (req, res) => {
    const sql = "SELECT * FROM users where id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ message: "Database error" });
        }
        return res.status(200).json(data);
        
    });
});

app.post('/create', (req, res) => {
    const sql = "insert into users (`name`, `email`, `phone`) values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json(err);
            return res.status(500).json({ message: "Failed to create user" });
        }
        console.log("User Created")
        return res.status(201).json({ message: "User created", userId: data.insertId });
    })
})

app.put('/update/:id', (req, res) => {
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
            return res.status(500).json({ message: "Failed to update user" });
        }
        console.log("User Updated")
        return res.status(200).json({ message: "User updated", data });
    })
})

app.delete(`/delete/:id`, (req, res) => {
    const sql = "delete from users where id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data)=>{
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ message: "Failed to delete user" });
        }
        console.log("User Deleted")
        return res.status(200).json({ message: "User deleted" });
    })
})

app.listen(4500, () => {
    // console.log("\n\n\n\nServer started");
    console.log("Server started");
})