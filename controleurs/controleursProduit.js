import dotenv from "dotenv";
import * as modelesProduit from '../modeles/modelesProduit.js';

dotenv.config();

export const recuperationProduit = async (req, res) => {

     try {
        const [result] = await modelesProduit.recuperationProduit();

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "produit non trouvé"});
        }

    } catch (error) {
        res.status(500).json({message: "erreur lors de la récupération des produit", error});
        console.log(error);
    }
}

export const recuperationCategories = async (req, res) => {

     try {
        const [result] = await modelesProduit.recuperationCategories();

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "catégories non trouvé"});
        }

    } catch (error) {
        res.status(500).json({message: "erreur lors de la récupération des produit", error});
        console.log(error);
    }
}

export const ajoutProduit = async (req, res) => {
    
    // récupération des données du corps de la requête
    const {nom, unite, quantite, seuilMini, PrixUnitaire, categorieId} = req.body;

    try {

        await modelesProduit.ajoutProduit(nom, unite, quantite, seuilMini, PrixUnitaire, categorieId)
        res.status(201).json({ message: "Produits créé"});
        
    } catch (error) {
        // gestion en cas d'erreur
        res.status(500).json({message: "erreur lors de l'enregistrement d'un produit", error})
        
    }
}

export const majProduit = async (req, res) => {
    
    const idProduit = req.params.idProduit;
   
    // récupération des informations à mettre à jour
    const {nom, unite, quantite, seuilMini, PrixUnitaire} = req.body;

    try {
        // utilisation de la connexion bdd pour executer la requete
        await modelesProduit.majProduit(nom, unite, quantite, seuilMini, PrixUnitaire, idProduit);
        // envoi de la réponse
        res.status(200).json({message: "produit mis à jour"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la mise à jour du produit", error});
        console.log(error);
    }
}