import dotenv from "dotenv";
import * as modelesCommande from '../modeles/modelesCommande.js';

dotenv.config();

export const recuperationCommande = async (req, res) => {

     try {
        const [result] = await modelesCommande.recuperationCommande();

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "commande non trouvé"});
        }

    } catch (error) {
        res.status(500).json({message: "erreur lors de la récupération des commandes", error});
        console.log(error);
    }
}

export const creationCommande = async (req, res) => {
    
    // récupération des données du corps de la requête
    const {statutId, employeId, totalHT, borne} = req.body;

    try {

        await modelesCommande.creationCommande(statutId, employeId, totalHT, borne)
        res.status(201).json({ message: "Commande créé"});
        
    } catch (error) {
        // gestion en cas d'erreur
        res.status(500).json({message: "erreur lors de l'enregistrement d'une commande", error})
        
    }
}

export const majCommande = async (req, res) => {
    
    const idCommande = req.params.idCommande;
   
    // récupération des informations à mettre à jour
    const {statutId, employeId, totalHT, borne} = req.body;

    try {
        // utilisation de la connexion bdd pour executer la requete
        await modelesCommande.majCommande(statutId, employeId, totalHT, borne, idCommande);
        // envoi de la réponse
        res.status(200).json({message: "commande mis à jour"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la mise à jour de la commande", error});
        console.log(error);
    }
}

export const supressionCommande = async (req, res) => {

    const idCommande = req.params.idCommande;

     try {
     await modelesCommande.supressionCommande(idCommande);

       res.status(200).json({message: "commande suprimé"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la supression", error});
        console.log(error);
    }
}