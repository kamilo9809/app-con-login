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


{/**inicio con url login */}
app.get('/api/loginadmin', (req, res) => {
  connection.query('SELECT * FROM usuario_admin', (error, results) => {
    if (error) {
      console.error('Error querying MySQL:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});


app.post('/api/loginadmin', (req, res) => {
  const { username, password } = req.body;

  // Realiza la verificación de credenciales en la base de datos
  // consulta
  const query = 'SELECT nombre_de_usuario, rol FROM usuario_admin WHERE nombre_de_usuario = ? AND contrasenas = ?';
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Error querying MySQL:', error);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length > 0) {
        const user = results[0];
        // Usuario autenticado correctamente
        res.json({
          success: true,
          message: 'Inicio de sesión exitoso',
          username: user.nombre_de_usuario,
          rol: user.rol,
        });
      } else {
        // Credenciales incorrectas
        res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
      }
    }
  });
});

{/**fin con url login */}

{/**inicio funcion url para crear usuario*/}
app.get('/api/createuser', (req,res)=>{
  connection.query('SELECT * FROM usuario_admin',(error, results)=>{
    if (error) {
      console.error('Error querying MySQL:', error);
      res.status(500).send('Internal Server Error');
    }else{
      res.json(results)
    }
  })
})

app.post('/api/createuser', (req, res) => {
  const { nombre_de_usuario, contrasenas, rol } = req.body;

  const query = 'INSERT INTO usuario_admin (nombre_de_usuario, contrasenas, rol) VALUES (?, ?, ?)';

  connection.query(query, [nombre_de_usuario, contrasenas, rol], (error) => {
    if (error) {
      console.error('Error al insertar en MySQL:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Usuario insertado con éxito');
      res.status(200).json({ message: 'Usuario insertado con éxito' });
    }
  });
});
{/**fin funcion url para crear usuario*/}


{/**inicio crear formulario */}

//agregar pregunta a la base de datos
app.get('/api/preguntas', (req, res) => {
  connection.query('SELECT * FROM preguntas', (error, results) => {
    if (error) {
      console.error('Error querying MySQL:', error); 
      res.status(500).send('Internal Server Error');     
    } else {
      res.json(results);
    }
  });
});

app.post('/api/preguntas', (req, res) => {
  const { Texto_Pregunta, tipo_pregunta } = req.body;
  const query = 'INSERT INTO preguntas (Texto_Pregunta, tipo_pregunta) VALUES (?, ?)';
  connection.query(query, [Texto_Pregunta, tipo_pregunta], (error) => {
    if (error) {
      console.error('Error al insertar en MySQL:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Pregunta insertada con éxito');
      res.json({ message: 'Pregunta insertada con éxito' });
    }
  });
});

{/**fin crear formulacion */}

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

