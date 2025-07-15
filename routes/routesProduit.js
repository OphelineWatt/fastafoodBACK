import express from 'express';
import {recuperationProduit} from '../controleurs/controleursProduit.js'

const router = express.Router();

router.get('/produits',recuperationProduit);


export default router;