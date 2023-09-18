import { Categoria } from '../models/Categoria.js'
import { Producto } from '../models/Producto.js'

export async function getProductos(req, res) {  //http://localhost:3000/api/productos/
    try{
        const productos = await Producto.findAll({
            attributes: ['id', 'nombre', 'precio_unitario', 'estado', 'categoria_id', 'usuario_id'],
        })
        res.json(productos);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export async function createProducto(req, res){  //http://localhost:3000/api/productos/
    const { nombre, precio_unitario, estado, categoria_id, usuario_id } = req.body;
    try {
        const newProducto = await Producto.create({
            nombre: nombre,
            precio_unitario: precio_unitario,
            estado: estado,
            categoria_id: categoria_id,
            usuario_id: usuario_id,
        });
        res.json(newProducto);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export async function getProducto(req, res){  //http://localhost:3000/api/productos/1
    const { id } = req.params;
    try {
        const producto = await Producto.findOne({
            where: { id },
        });
        return res.json(producto);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export async function updateProducto(req, res){  //http://localhost:3000/api/productos/1
    const { id } = req.params;
    try {
        const producto = await Producto.findOne({
            attributes: ['id', 'nombre', 'precio_unitario', 'estado', 'categoria_id', 'usuario_id'],
            where: { id },
        });
        producto.set(req.body);
        await producto.save();
        return res.json(producto);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


export async function deleteProducto(req, res) { // http://localhost:3000/api/productos/1
    const { id } = req.params;
    try {
        await Producto.destroy({
            where: { usuario_id: id, categoria_id: id },
        });
        return res.sendStatus(204);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
