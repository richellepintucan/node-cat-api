import express from 'express';
import catControllers from '../controllers/cat.js';

const router = express.Router();

// routes
router.get('/', catControllers.getCats);
router.get('/:id', catControllers.getCatById);
router.post('/', catControllers.addCat);
router.put('/:id', catControllers.updateCat);
router.delete('/:id', catControllers.deleteCat);

export default router;
