import express from 'express';
import {ajoutProduit, recuperationCategories, recuperationProduit} from '../controleurs/controleursProduit.js'

const router = express.Router();

router.get('/produits',recuperationProduit);

router.get('/categories',recuperationCategories);

router.post('/ajoutProduit', ajoutProduit);


export default router;