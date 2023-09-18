import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Producto } from './Producto.js'

export const Categoria = sequelize.define(
    'categorias',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        }
    }
)

Categoria.hasMany(Producto, { //el proyecto Tiene muchos tareas [de uno a muchos]
    foreignKey: 'categoria_id',
    sourceKey: 'id',
});

Producto.belongsTo(Categoria, {  // la tarea pertenece a proyectos [de muchos a uno]
    foreignKey: 'categoria_id',
    targetKey: 'id',
});