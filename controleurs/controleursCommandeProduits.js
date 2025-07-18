import dotenv from "dotenv";
import * as modelesCommandeProduits from '../modeles/modelesCommandeProduits.js';

dotenv.config();

export const recuperationCommandeProduit = async (req, res) => {

    const commandeId = req.params.commandeId;

     try {
        const [result] = await modelesCommandeProduits.recuperationCommandeProduit(commandeId);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "commande/produit non trouvé"});
        }

    } catch (error) {
        res.status(500).json({message: "erreur lors de la récupération des commandes produits", error});
        console.log(error);
    }
}

export const ajoutCommandeProduit = async (req, res) => {
    
    // récupération des données du corps de la requête
    const {commandeId, produitId, quantite} = req.body;

    try {

        await modelesCommandeProduits.ajoutCommandeProduit(commandeId, produitId, quantite)
        res.status(201).json({ message: "commande/Produits créé"});
        
    } catch (error) {
        // gestion en cas d'erreur
        res.status(500).json({message: "erreur lors de l'enregistrement de la commande/Produits", error})
        
    }
}

export const majCommandeProduit = async (req, res) => {
    
    const idCommandeProduit = req.params.idCommandeProduit;
   
    // récupération des informations à mettre à jour
    const {quantite} = req.body;

    try {
        // utilisation de la connexion bdd pour executer la requete
        await modelesCommandeProduits.majCommandeProduit(quantite, idCommandeProduit);
        // envoi de la réponse
        res.status(200).json({message: "produit mis à jour"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la mise à jour du produit", error});
        console.log(error);
    }
}

export const supressionCommandeProduit = async (req, res) => {

    const idCommandeProduit = req.params.idCommandeProduit;

     try {
     await modelesCommandeProduits.supressionCommandeProduit(idCommandeProduit);

       res.status(200).json({message: "produit suprimé"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la supression", error});
        console.log(error);
    }
}