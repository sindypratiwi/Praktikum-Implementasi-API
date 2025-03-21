import express from 'express';
import mysql from 'mysql2';

const db = mysql.createConnection({ host: "localhost", user: "root", database: "openapi", password: ""});
const app = express();

app.get('/users', (req, res) => {
    db.query('SELECT * FROM user', (err,results)=> {
        if (err) {
            res.status(500).send('Internal Server Eror');
            return;
        }

        res.json(results);
    });
});
app.listen(4000, () => console.log('Server berjalan di http://localhost:4000')); 