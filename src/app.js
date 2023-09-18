import express from 'express';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import { Usuario } from './models/Usuario.js';
const app = express();

// imports routes
import usuarioRoutes from './routes/usuarios.routes.js';
import categoriaRoutes from './routes/categorias.routes.js';
import productoRoutes from './routes/productos.routes.js'

// Middleware 
app.use(morgan('dev'));
app.use(express.json());

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log('bearerHeader: ', bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1];
        console.log('token: ', token);
        jwt.verify(token, 'secretkey', (error, usuario) => {
            if (error) res.sendStatus(403);
            else {
                next();
            }
        })
    } else {
        res.sendStatus(403);
    }
}



//Routes
app.use('/api/usuarios', verifyToken, usuarioRoutes);
app.use('/api/categorias', verifyToken, categoriaRoutes)
app.use('/api/productos', verifyToken, productoRoutes)



app.post('/api/login', (req, res) => {
    try {
        Usuario.create(
            {
                nombre: 'rodry',
                correo: 'rodry@gmail.com',
                contrasenia: "123",
                estado: true,
            },
            {
                fields: ['nombre', 'correo', 'contrasenia', 'estado'],
            }
        );

        const user = {
            nombre: 'rodry',
            correo: 'rodry@gmail.com'
        }
        jwt.sign({ user }, 'secretkey', (err, token) => {
            res.json(token)
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})




export default app;