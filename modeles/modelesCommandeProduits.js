import db from '../configuration/bd.js';

export const recuperationCommandeProduit= (commandeId) => {
    const getCp = `SELECT nom, prixUnitaire, commandeId, produitId, cp.quantite, totalHT, dateCreation, idCommandeProduit FROM commandeProduits cp
    INNER JOIN produits p on p.idProduit = cp.produitId 
    INNER JOIN commandes on idCommande = commandeId
    WHERE commandeId = ?;`;

    return db.query(getCp,[commandeId]);
}

export const ajoutCommandeProduit = (commandeId, produitId, quantite) => {

    const insertionCommandeProduit = "INSERT INTO commandeProduits (commandeId, produitId, quantite) VALUES (?,?,?);";

    // Exécute la requête d'insertion avec les paramètres fournis
    // et retourne le résultat de la requête
    return db.query(insertionCommandeProduit, [commandeId, produitId, quantite]);
}

export const majCommandeProduit = (quantite, idCommandeProduit) => {
    const majComPro = "UPDATE commandeProduits SET quantite =? WHERE idcommandeProduit = ?;";
    
    return db.query(majComPro, [ quantite, idCommandeProduit]);
}

export const supressionCommandeProduit= (idCommandeProduit) => {
    
    const deleteComPro = `DELETE FROM commandeProduits
    WHERE idCommandeProduit = ?;`;

    
    return db.query(deleteComPro, [idCommandeProduit]);
}