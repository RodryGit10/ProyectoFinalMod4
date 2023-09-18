
import { Usuario } from '../models/Usuario.js';
import { Categoria } from '../models/Categoria.js';
import { Producto } from '../models/Producto.js';



export async function getUsuarios(req, res) {  //http://localhost:3000/api/usuarios
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id', 'nombre', 'correo', 'contrasenia', 'estado']
        })
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function createUsuario(req, res) {  //http://localhost:3000/api/usuarios
    const { nombre, correo, contrasenia, estado } = req.body;
    try {
        const newUsuario = await Usuario.create(
            {
                nombre,
                correo,
                contrasenia,
                estado
            },
            {
                fields: ['nombre', 'correo', 'contrasenia', 'estado'],
            }
        );
        return res.json(newUsuario);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getUsuario(req, res) {    // http://localhost:3000/api/usuarios/1
    const { id } = req.params;  
    try {
        const usuario = await Usuario.findOne({
            where: { id: id },
        });
        return res.json(usuario);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updateUsuario(req, res) {   //// http://localhost:3000/api/usuarios/1
    const { id } = req.params;
    const { nombre, correo, contrasenia, estado } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        usuario.nombre = nombre;
        usuario.correo = correo;
        usuario.contrasenia = contrasenia;
        usuario.estado = estado;

        await usuario.save();
        return res.json(usuario)

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function deleteUsuario(req, res) { //// http://localhost:3000/api/usuarios/1
    const { id } = req.params;
    try {

        await Producto.destroy({
            where: { usuario_id: id },
        })

        await Categoria.destroy({
            where: { categoria_id: id },
        })

        await Usuario.destroy({
            where: { id },
        })
        return res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
// ....................................................................
export async function getUsuarioCategorias(req, res) {  //http://localhost:3000/api/usuarios/1/categorias
    const { id } = req.params;
    try {
        const categorias = await Categoria.findAll({
            attributes: ['id', 'nombre', 'usuario_id'],
            where: { usuario_id: id },
        })
        return res.json(categorias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//----------------------------------------------------------------------

export async function getUsuariosCategorias(req, res) {  // http://localhost:3000/api/usuarios/all/categorias/all
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id', 'nombre', 'correo', 'contrasenia', 'estado'],
            include: [
                {
                    model: Categoria,
                    attributes: ['id', 'nombre'],
                    required: true
                }
            ]
        })
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



export async function getUsuarioCatsProducts(req, res) { //http://localhost:3000/api/usuarios/1/categorias/productos
    const { id } = req.params;
    try {
        const categorias = await Categoria.findAll({
            attributes: ['id', 'nombre', 'usuario_id'],
            where: { usuario_id: id },
            include: [
                {
                    model: Producto,
                    attributes: ['id', 'nombre', 'precio_unitario'],
                    required: true
                }
            ]
        })
        return res.json(categorias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}