import db from '../configuration/bd.js';

export const ajoutEmploye = (nom,prenom, email, motDePasseCrypte,roleId) => {

    const insertionEmploye = "INSERT INTO employes (nom, prenom, email, motDePasse,roleId) VALUES (?,?,?,?,?);";

    // Exécute la requête d'insertion avec les paramètres fournis
    // et retourne le résultat de la requête
    return db.query(insertionEmploye, [nom, prenom, email, motDePasseCrypte,roleId]);
}

export const connexion = (email) => {
    
        const donneesEmploye = "SELECT idEmploye, nom, prenom, email, motDePasse, roleId from employes where email like ?;";

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
    INNER JOIN roles on idRole = roleId;`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(getProfil);
}

export const recuperationRole= () => {
    const getRole = `SELECT idRole, libelle FROM roles;`

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(getRole);
}



export const majProfil = (nom, prenom, email, idEmploye) => {
    const majEmploye = "UPDATE employes SET nom = ?, prenom =?, email = ? WHERE idEmploye = ?;";
    
    return db.query(majEmploye, [nom, prenom, email, idEmploye]);
}

export const majMDP = (nouveauMotDePasseCrypte, idEmploye) => {
     // préparation de la requete de mise à jour
    const majPass = "UPDATE employes SET motDePasse = ? WHERE idEmploye = ?;";

    // Exécute la requête de mise à jour avec le nouveau mot de passe et l'ID utilisateur
    return db.query(majPass, [nouveauMotDePasseCrypte, idEmploye]);
}

export const getMdp = (idEmploye) => {
    const selectMdp = "SELECT motDePasse FROM employes WHERE idEmploye = ?;";

    return db.query(selectMdp, [idEmploye])
}

export const deleteEmploye= (idEmploye) => {
    
    const deleteProfil = `DELETE FROM employes
    WHERE idEmploye = ?;`;

    // Exécute la requête de sélection avec l'ID utilisateur fourni
    return db.query(deleteProfil, [idEmploye]);
}