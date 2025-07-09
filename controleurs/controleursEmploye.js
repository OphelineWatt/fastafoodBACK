import dotenv from "dotenv";
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import * as modelesEmploye from '../modeles/modelesEmploye.js'

dotenv.config();

export const enregistrement = async (req, res) => {


    console.log("je suis dans le controller");
    // récupération des données du corps de la requête
    const {nom,prenom, email, motDePasse,roleId} = req.body;

    try {
        // cryptage du password
        const motDePasseCrypte = await bcrypt.hashSync(motDePasse, 10);

        // appel de la fonction addUser du modèle userModels
        // cette fonction permet d'insérer un nouvel utilisateur dans la base de données
        await modelesEmploye.ajoutEmploye(nom, prenom, email, motDePasseCrypte,roleId)
        res.status(201).json({ message: "Employé créé"});
        
    } catch (error) {
        // gestion en cas d'erreur
        res.status(500).json({message: "erreur lors de l'inscription de l'employé", error})
        
    }
}

export const connexion = async (req, res) => {
    const {email, motDePasse} = req.body;

}