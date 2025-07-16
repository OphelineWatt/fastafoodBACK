import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bdd from "./configuration/bd.js";
import routesEmploye from "./routes/routesEmploye.js";
import routesProduit from"./routes/routesProduit.js";
import routesCommande from "./routes/routesCommande.js";
import routesCommandeProduits from "./routes/routesCommandeProduits.js";


// création de l'application express
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
// utilisation de dotenv pour charger les variables d'environnement
dotenv.config();

// utilisation des routes
app.use("/api", routesEmploye, routesProduit, routesCommande, routesCommandeProduits);

// démarrage du server sur le port défini dans le fichier .env
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
  if(bdd) {
  console.log("Database connection established");
  }
});