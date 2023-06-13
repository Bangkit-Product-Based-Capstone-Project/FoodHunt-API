import Artikel from "../models/ArtikelModel.js";
import path from "path";
import fs from "fs";

export const getArtikel = async (req, res) => {
  try {
    const response = await Artikel.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getArtikelbyId = async (req, res) => {
  try {
    const response = await Artikel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveArtikel = (req, res) => {
  if (req.files === null) return res.status(400).json({ message: " No FIle Uploaded" });
  const Judul = req.body.Judul;
  const Body = req.body.Body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ message: "Invalid Image" });
  if (fileSize > 5000000) return res.status(422).json({ message: "image size exceeds" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ message: err.message });
    try {
      await Artikel.create({
        Judul: Judul,
        image: fileName,
        url: url,
        Body: Body,
      });
      res.status(201).json({ message: "Artikel create Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateArtikel = async (req, res) => {
  const artikel = await Artikel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!artikel) return res.status(404).json({ message: "Data not Found" });
  let fileName = "";
  if (req.files === null) {
    fileName = Artikel.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ message: "Invalid Image" });
    if (fileSize > 5000000) return res.status(422).json({ message: "image size exceeds" });

    //menghapus image yang terdapat pada file directory
    const filepath = `./public/images/${artikel.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }
  const Judul = req.body.Judul;
  const Body = req.body.Body;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Artikel.update(
      {
        Judul: Judul,
        image: fileName,
        Body: Body,
        url: url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Artikel Updates successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteArtikel = async (req, res) => {
  const artikel = await Artikel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!artikel) return res.status(404).json({ message: "Data not Found" });

  try {
    const filepath = `./public/images/${artikel.image}`;
    fs.unlinkSync(filepath);
    await Artikel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: " Artikel Delete Success" });
  } catch (error) {
    console.log(error);
  }
};
