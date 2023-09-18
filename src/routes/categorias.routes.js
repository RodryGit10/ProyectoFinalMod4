import { Router} from 'express'
import { getCategorias, createCategoria, getCategoria, updateCategoria, deleteCategoria } from '../controllers/categoria.controllers.js'
const router = Router();

// Rutas
router.get('/', getCategorias);

router.post('/', createCategoria);

router.put('/:id', updateCategoria);

router.delete('/:id', deleteCategoria);

router.get('/:id', getCategoria);

export default router;