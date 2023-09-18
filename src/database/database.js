import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'proyecto3_db', // nombre de la base de datos
    'postgres', //nombre de usuario
    'postgres', //password de la base de datos
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);
