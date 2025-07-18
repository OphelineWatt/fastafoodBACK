import express from 'express';
import { ajoutCommandeProduit, majCommandeProduit, recuperationCommandeProduit, supressionCommandeProduit } from '../controleurs/controleursCommandeProduits.js';

const router = express.Router();

router.get('/commandeProduits/:commandeId',recuperationCommandeProduit);

router.post('/ajoutCommandeProduits', ajoutCommandeProduit);

router.put('/majCommandeProduits/:idCommandeProduit', majCommandeProduit);

router.delete('/supressionCommandeProduits/:idCommandeProduit', supressionCommandeProduit);

export default router;