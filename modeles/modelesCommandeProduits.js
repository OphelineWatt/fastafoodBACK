import db from '../configuration/bd.js';

export const recuperationCommandeProduit= () => {
    const getCp = `SELECT commandeId, produitId, quantite FROM commandeProduits;`;

    return db.query(getCp);
}

export const ajoutCommandeProduit = (commandeId, produitId, quantite) => {

    const insertionCommandeProduit = "INSERT INTO commandeProduits (commandeId, produitId, quantite) VALUES (?,?,?);";

    // Exécute la requête d'insertion avec les paramètres fournis
    // et retourne le résultat de la requête
    return db.query(insertionCommandeProduit, [commandeId, produitId, quantite]);
}

export const majCommandeProduit = (produitId, quantite, idCommandeProduit) => {
    const majComPro = "UPDATE commandeProduits SET produitId = ?, quantite =? WHERE idcommandeProduit = ?;";
    
    return db.query(majComPro, [produitId, quantite, idCommandeProduit]);
}

export const supressionCommandeProduit= (idCommandeProduit) => {
    
    const deleteComPro = `DELETE FROM commandeProduits
    WHERE idCommandeProduit = ?;`;

    
    return db.query(deleteComPro, [idCommandeProduit]);
}