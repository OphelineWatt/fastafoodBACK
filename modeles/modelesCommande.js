import db from '../configuration/bd.js';

export const recuperationCommande= () => {
    const getCommande = `SELECT idCommande, dateCreation, libelle, nom, prenom, totalHT, borne FROM commandes
    INNER JOIN statuts on idStatut = statutId
    INNER JOIN employes on idEmploye = employeId`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(getCommande);
}

export const creationCommande = (employeId) => {

    const insertionCommande = "INSERT INTO commandes (statutId, employeId, totalHT, borne) VALUES (1,?,0,0);";

    // Exécute la requête d'insertion avec les paramètres fournis
    // et retourne le résultat de la requête
    return db.query(insertionCommande, [employeId]);
}

export const majCommande = (statutId, totalHT, idCommande) => {
    const majCmd = "UPDATE commandes SET statutId = ?, totalHT = ? WHERE idCommande = ?;";
    
    return db.query(majCmd, [statutId, totalHT, idCommande]);
}

export const supressionCommande= (idCommande) => {
    
    const deleteCommande = `DELETE FROM commandes
    WHERE idCommande = ?;`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(deleteCommande, [idCommande]);
}