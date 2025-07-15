import express from 'express';
import {ajoutProduit, recuperationProduit} from '../controleurs/controleursProduit.js'

const router = express.Router();

router.get('/produits',recuperationProduit);

router.post('/ajoutProduit', ajoutProduit);


export default router;