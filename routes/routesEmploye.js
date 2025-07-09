import express from 'express';
import verifToken from '../middleware/verifToken.js';
import {enregistrement, connexion, getProfilId, getProfil, majProfil} from '../controleurs/controleursEmploye.js'


// création du router permettant de gérer les routes liées aux utilisateurs
const router = express.Router();

router.post('/enregistrement', enregistrement);

router.post('/connexion', connexion);

router.get('/profil', verifToken, getProfilId)

router.get('/employes',getProfil)

router.put('/profil/maj', verifToken, majProfil); 

export default router;