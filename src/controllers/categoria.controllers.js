import { Categoria } from '../models/Categoria.js'
import { Producto } from '../models/Producto.js'

export async function getCategorias(req, res) {  //http://localhost:3000/api/categorias
    try{
        const categorias = await Categoria.findAll({
            attributes: ['id', 'nombre', 'usuario_id'],
        })
        res.json(categorias);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export async function createCategoria(req, res){  //http://localhost:3000/api/categorias
    const { nombre,  usuario_id} = req.body;
    try {
        const newCategoria = await Categoria.create({
            nombre,
            usuario_id,
        });
        res.json(newCategoria);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export async function getCategoria(req, res){  //http://localhost:3000/api/categorias/1
    const { id } = req.params;
    try {
        const categoria = await Categoria.findOne({
            where: { id },
        });
        return res.json(categoria);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export async function updateCategoria(req, res){  // http://localhost:3000/api/categorias/1
    const { id } = req.params;
    try {
        const categoria = await Categoria.findOne({
            attributes: ['id', 'nombre', 'usuario_id'],
            where: { id },
        });
        categoria.set(req.body);
        await categoria.save();
        return res.json(categoria);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export async function deleteCategoria(req, res) {  //http://localhost:3000/api/categorias/1
    const { id } = req.params;
    try {
        await Producto.destroy({
            where: { categoria_id: id }
        })
        await Categoria.destroy({
            where: { usuario_id: id },
        });
        return res.sendStatus(204);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}