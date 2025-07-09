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

export const getProfilId= (idEmploye) => {
    const getProfil = `SELECT idEmploye, nom, prenom, email, libelle  FROM employes
    INNER JOIN roles on idRole = roleId
    WHERE idEmploye = ?;`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(getProfil, [idEmploye]);
}

export const getProfil= () => {
    const getProfil = `SELECT idEmploye, nom, prenom, email, libelle  FROM employes
    INNER JOIN roles on idRole = roleId`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(getProfil);
}