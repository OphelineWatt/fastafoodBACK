import dotenv from "dotenv";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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

    try{

        // appel de la fonction loginUser du modèle userModels
        // cette fonction permet de récupérer les données de l'utilisateur à partir de son mail
        const [resultat] = await modelesEmploye.connexion(email);

        //récupération des infos employé sous forme de tableau
        const donnees = resultat[0];

        if (resultat){

            const verifMotDePasse = await bcrypt.compare(motDePasse, donnees.motDePasse);
            
            if (verifMotDePasse == true){

                console.log(process.env.SECRET_KEY)
                // création du token
                const token = jwt.sign({idEmploye: donnees.idEmploye, roleId: donnees.roleId, prenom: donnees.prenom}, process.env.SECRET_KEY, {expiresIn: "7h"});

                res.status(201).json({
                    message: "connexion autorisé",
                    token: token
                });
            } else {
                res.status(403).json({message: "accès refusé"});
            }

        } else {
            res.status(104).json({message: "utilisateur inconnu"})
        }

    } catch (error) {

        res.status(500).json({message: "erreur lors de la connexion", error})
        console.log(error);

    }
}

export const getProfilId = async (req, res) => {
        // récupération de l'id de l'utilisateur à partir du token
    // le token est vérifié par le middleware checkToken
    const idEmploye = req.user.idEmploye;

     try {
        const [result] = await modelesEmploye.getProfilId(idEmploye);

        if (result.length > 0) {
            res.status(200).json(result[0]);
        } else {
            res.status(404).json({message: "utilisateur non trouvé"});
        }

    } catch (error) {
        res.status(500).json({message: "erreur lors de la récupération du profil", error});
        console.log(error);
    }
}

export const getProfil = async (req, res) => {

     try {
        const [result] = await modelesEmploye.getProfil();

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "utilisateur non trouvé"});
        }

    } catch (error) {
        res.status(500).json({message: "erreur lors de la récupération du profil", error});
        console.log(error);
    }
}

