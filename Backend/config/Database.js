import { Sequelize } from "sequelize";

const database = new Sequelize(`Foodhunt`, `root`, `<rV>eBE,A__A'gr3`, {
  host: "34.101.114.223",
  dialect: "mysql",
});

export default database;
