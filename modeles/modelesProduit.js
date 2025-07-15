import db from '../configuration/bd.js';

export const recuperationProduit= () => {
    const getProduit = `SELECT nom, unite, quantite, seuilMini, PrixUnitaire, libelle FROM produits
    INNER JOIN categories on idCategorie = categorieId;`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(getProduit);
}

export const recuperationCategories= () => {
    const categories = `SELECT idCategorie, libelle FROM categories`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(categories);
}



export const ajoutProduit = (nom, unite, quantite, seuilMini, PrixUnitaire, categorieId) => {

    const insertionProduit = "INSERT INTO produits (nom, unite, quantite, seuilMini, PrixUnitaire, categorieId) VALUES (?,?,?,?,?,?);";

    // Exécute la requête d'insertion avec les paramètres fournis
    // et retourne le résultat de la requête
    return db.query(insertionProduit, [nom, unite, quantite, seuilMini, PrixUnitaire, categorieId]);
}

export const majProduit = (nom, unite, quantite, seuilMini, PrixUnitaire, idProduit) => {
    const majPdt = "UPDATE produits SET nom = ?, unite =?, quantite = ?, seuilMini = ?, PrixUnitaire = ? WHERE idProduit = ?;";
    
    return db.query(majPdt, [nom, unite, quantite, seuilMini, PrixUnitaire, idProduit]);
}