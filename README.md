# ProyectoFinalMod4
EXAMEN FINAL MODULO 4 


NOMBRE: SIMEON RODRIGO CARITA ASPI
C.I.: 6773235


Enlace del proyecto en el Repositorio de GitHub:  https://github.com/RodryGit10/ProyectoFinalMod4.git


Para arrancar el Proyecto desde consola:  ->     npm run dev
------------------------------------------------------------------------------------------------------------------------
Para realizar las consultas se debe obtener el Token primeramente ingresando en:
 http://localhost:3000/api/login

---------------------------------------------------------
Creacion de Datos en la Tabla Usuario:  ->       http://localhost:3000/api/usuarios

{

    "nombre": "Pablo",
    "correo": "pablon@gmail.com",
    "contrasenia": "123",
    "estado": true
}

{
    "nombre": "RODRY",
    "correo": "rodry@gmail.com",
    "contrasenia": "123",
    "estado": true
}

{
    "nombre": "Juan",
    "correo": "juan@gmail.com",
    "contrasenia": "123",
    "estado": true
}
--------------------------------------------------------------------
Creacion de Datos en la Tabla Categorias: ->    http://localhost:3000/api/categorias

{
    "nombre": "Autos",
    "usuario_id": 1
}

{
    "nombre": "Motos",
    "usuario_id": 1
}

{
    "nombre": "Computadoras",
    "usuario_id": 2
}

{
    "nombre": "Televisores",
    "usuario_id": 2
}

{
    "nombre": "Matemaicas",
    "usuario_id": 3
}

{
    "nombre": "Fisica",
    "usuario_id": 3
}
------------------------------------------------------------------------------------
Creacion de Datos en la Tabla Productos: ->    http://localhost:3000/api/productos

{
    "nombre": "Toyota",
    "precio_unitario": 20000,
    "estado": true,
    "categoria_id": 1,
    "usuario_id": 1
}

{
    "nombre": "Suzuki",
    "precio_unitario": 15000,
    "estado": true,
    "categoria_id": 1,
    "usuario_id": 1
}

{
    "nombre": "Honda",
    "precio_unitario": 1000,
    "estado": true,
    "categoria_id": 2,
    "usuario_id": 1
}

{
    "nombre": "Yamaja",
    "precio_unitario": 2000,
    "estado": true,
    "categoria_id": 2,
    "usuario_id": 1
}


