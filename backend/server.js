import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyectou',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM porahoranohaytabla', (error, results) => {
    if (error) {
      console.error('Error querying MySQL:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
