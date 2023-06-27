import { Model, DataTypes } from "sequelize";
import database from "../database/database";

class Perguntar extends Model {
    public conteudo!: string;
    public qmperguntou!: string;
    public opcao!: string;
}

Perguntar.init(
    {
        conteudo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        qmperguntou: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        opcao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize: database,
        tableName: "perguntar",
    }
);

export default Perguntar;
