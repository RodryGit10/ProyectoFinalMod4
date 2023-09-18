import { Router } from 'express'
import {
    getUsuarios,
    createUsuario,
    getUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuarioCategorias,
    getUsuariosCategorias,
    getUsuarioCatsProducts
} from '../controllers/usuario.controllers.js';

const router = Router();

// Rutas
router.get('/', getUsuarios);

router.post('/', createUsuario);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

router.get('/:id', getUsuario);

router.get('/:id/categorias', getUsuarioCategorias)

router.get('/all/categorias/all', getUsuariosCategorias)

router.get('/:id/categorias/productos', getUsuarioCatsProducts)

export default router;