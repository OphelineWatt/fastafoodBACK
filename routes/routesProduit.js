import express from 'express';
import {ajoutProduit, majProduit, recuperationCategories, recuperationProduit} from '../controleurs/controleursProduit.js'

const router = express.Router();

router.get('/produits',recuperationProduit);

router.get('/categories',recuperationCategories);

router.post('/ajoutProduit', ajoutProduit);

router.put('/produit/maj/:idProduit', majProduit);


export default router;