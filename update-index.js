import express from 'express';
import mysql from 'mysql2';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';

const swaggerDocument = YAML.parse(fs.readFileSync('./openapi/spec.yml', 'utf8'));



const db = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'openapi' });
const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/users', (res, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if(err) {
        res.statusCode(500).send('Internal Server Eror');
        return;
    }

    res.json(results);
  });
});

app.listen(4000, () => console.log ('Server berjalan di http://localhost:4000'));


