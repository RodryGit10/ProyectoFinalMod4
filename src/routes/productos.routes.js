import { Router} from 'express'
import { getProductos, createProducto, getProducto, updateProducto, deleteProducto } from '../controllers/producto.controllers.js'

const router = Router();

// Rutas
router.get('/', getProductos);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.delete('/:id', deleteProducto);

router.get('/:id', getProducto);

export default router;