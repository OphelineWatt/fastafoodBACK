import db from '../configuration/bd.js';

export const ajoutEmploye = (nom,prenom, email, motDePasseCrypte,roleId) => {

    const insertionEmploye = "INSERT INTO employes (nom, prenom, email, motDePasse,roleId) VALUES (?,?,?,?,?);";

    // Exécute la requête d'insertion avec les paramètres fournis
    // et retourne le résultat de la requête
    return db.query(insertionEmploye, [nom, prenom, email, motDePasseCrypte,roleId]);
}

export const connexion = (email) => {
    
        const donneesEmploye = "SELECT idEmploye, nom, prenom, email, motDePasse from employes where email like ?;";

        return db.query(donneesEmploye, [email]);
}