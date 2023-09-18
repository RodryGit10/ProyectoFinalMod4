import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Categoria } from './Categoria.js';
import { Producto } from './Producto.js'

export const Usuario = sequelize.define(
    'usuarios',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING,
        },
        correo:{
            type: DataTypes.STRING,
        },
        contrasenia:{
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }
)

Usuario.hasMany(Categoria, { //el proyecto Tiene muchos tareas [de uno a muchos]
    foreignKey: 'usuario_id',
    sourceKey: 'id',
});

Categoria.belongsTo(Usuario, {  // la tarea pertenece a proyectos [de muchos a uno]
    foreignKey: 'usuario_id',
    targetKey: 'id',
});


Usuario.hasMany(Producto, { //el proyecto Tiene muchos tareas [de uno a muchos]
    foreignKey: 'usuario_id',
    sourceKey: 'id',
});

Producto.belongsTo(Usuario, {  // la tarea pertenece a proyectos [de muchos a uno]
    foreignKey: 'usuario_id',
    targetKey: 'id',
});