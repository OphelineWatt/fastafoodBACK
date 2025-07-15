import db from '../configuration/bd.js';

export const recuperationProduit= () => {
    const getProduit = `SELECT nom, unite, quantite, seuilMini, PrixUnitaire FROM produits
    INNER JOIN categories on idCategorie = categorieId;`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(getProduit);
}
