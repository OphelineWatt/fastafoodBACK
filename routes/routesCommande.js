import express from 'express';
import { creationCommande, majCommande, recuperationCommande, supressionCommande } from '../controleurs/controleursCommande.js';



const router = express.Router();

router.get('/commandes',recuperationCommande);

router.post('/commandes/creation', creationCommande);

router.put('/commandes/maj/:idCommande', majCommande);

router.delete('/commandes/supression/:idCommande', supressionCommande);

export default router;