import { Router } from 'express';
import { ProductController } from '../controllers';

const router = Router();

const productController = new ProductController();

router.get('/', productController.index);
router.get('/:id', productController.find);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.post('/', productController.create); 

export default router;
