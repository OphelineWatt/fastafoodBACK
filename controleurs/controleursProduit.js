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

export const ajoutProduit = async (req, res) => {
    
    // récupération des données du corps de la requête
    const {nom, unite, quantite, seuilMini, PrixUnitaire, categorieId} = req.body;

    try {

        await modelesProduit.ajoutProduit(nom, unite, quantite, seuilMini, PrixUnitaire, categorieId)
        res.status(201).json({ message: "Employé créé"});
        
    } catch (error) {
        // gestion en cas d'erreur
        res.status(500).json({message: "erreur lors de l'inscription de l'employé", error})
        
    }
}