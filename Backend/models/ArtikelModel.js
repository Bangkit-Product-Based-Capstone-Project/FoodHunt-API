import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const { DataTypes } = Sequelize;

const Artikel = database.define(
  "Artikel",
  {
    Judul: DataTypes.STRING,
    image: DataTypes.STRING,
    Body: DataTypes.TEXT,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Artikel;

(async () => {
  await database.sync();
})();
