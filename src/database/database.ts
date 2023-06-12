import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blog", "root", "loop170414", {
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;
