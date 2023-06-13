import express from "express";
import { getArtikel, getArtikelbyId, saveArtikel, updateArtikel, deleteArtikel } from "../controllers/ArtikelController.js";

const ArtikelRouter = express.Router();

ArtikelRouter.get("/artikel", getArtikel);

ArtikelRouter.get("/artikel/:id", getArtikelbyId);

ArtikelRouter.post("/artikel", saveArtikel);

ArtikelRouter.patch("/artikel/:id", updateArtikel);

ArtikelRouter.delete("/artikel/:id", deleteArtikel);

export default ArtikelRouter;
