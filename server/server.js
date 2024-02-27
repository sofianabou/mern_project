// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("./db");
const UserModel = require('./models/Users');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    res.status(500).send("Erreur interne du serveur");
  }
});

app.listen(port, () => {
  console.log("Server works waoo !! ");
});


