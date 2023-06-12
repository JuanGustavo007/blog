import { Model, DataTypes } from "sequelize";
import database from "../database/database";

class Cadastrar extends Model {
    public nome!: string;
    public email!: string;
    public telefone!: string;
    public cpf!: string;
    public senha!: string;
    public confirmar!: string;
}

Cadastrar.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        confirmar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: database,
        tableName: "cadastrar",
    }
);
export default Cadastrar;
