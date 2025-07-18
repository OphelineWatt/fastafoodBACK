import express from 'express';
import { creationCommande, majCommande, recuperationCommande, supressionCommande } from '../controleurs/controleursCommande.js';
import verifToken from '../middleware/verifToken.js';


const router = express.Router();

router.get('/commandes',recuperationCommande);

router.get('/commandes/creation',verifToken, creationCommande);

router.put('/commandes/maj/:idCommande', majCommande);

router.delete('/commandes/supression/:idCommande', supressionCommande);

export default router;