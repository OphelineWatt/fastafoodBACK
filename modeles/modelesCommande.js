import db from '../configuration/bd.js';

export const recuperationCommande= () => {
    const getCommande = `SELECT dateCreation, libelle, nom, prenom, totalHT, borne FROM commandes
    INNER JOIN statuts on idStatut = statutId
    INNER JOIN employes on idEmploye = employeId`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(getCommande);
}

export const creationCommande = (statutId, employeId, totalHT, borne) => {

    const insertionCommande = "INSERT INTO commandes (statutId, employeId, totalHT, borne) VALUES (?,?,?,?);";

    // Exécute la requête d'insertion avec les paramètres fournis
    // et retourne le résultat de la requête
    return db.query(insertionCommande, [statutId, employeId, totalHT, borne]);
}

export const majCommande = (statutId, employeId, totalHT, borne, idCommande) => {
    const majCmd = "UPDATE commandes SET statutId = ?, employeId =?, totalHT = ?, borne = ? WHERE idCommande = ?;";
    
    return db.query(majCmd, [statutId, employeId, totalHT, borne, idCommande]);
}

export const supressionCommande= (idCommande) => {
    
    const deleteCommande = `DELETE FROM commandes
    WHERE idCommande = ?;`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(deleteCommande, [idCommande]);
}