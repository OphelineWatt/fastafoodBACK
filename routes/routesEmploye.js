import express from 'express';
import verifToken from '../middleware/verifToken.js';
import {enregistrement, connexion, getProfilId, getProfil, majProfil, majmotDePasse, deleteEmploye, recuperationRole} from '../controleurs/controleursEmploye.js'


// création du router permettant de gérer les routes liées aux employés
const router = express.Router();

router.post('/enregistrement', enregistrement);

router.post('/connexion', connexion);

router.get('/profil', verifToken, getProfilId); 

router.get('/employes',getProfil);

router.get('/roles', recuperationRole);

router.put('/profil/maj/:idEmploye', majProfil);

router.put('/profil/motdepasse', verifToken, majmotDePasse);

router.delete('/profil/supression/:idEmploye', deleteEmploye);

export default router;