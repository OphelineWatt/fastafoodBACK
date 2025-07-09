import express from 'express';
// import checkToken from '../middleware/checkToken.js';
import {enregistrement} from '../controleurs/controleursEmploye.js'

// création du router permettant de gérer les routes liées aux utilisateurs
const router = express.Router();

router.post('/enregistrement', enregistrement);

export default router;