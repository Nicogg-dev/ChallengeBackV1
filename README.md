# Gestión de productos y clientes

Este proyecto es un gestor de tareas cortas diseñado para facilitar la organización y seguimiento eficiente de tareas pendientes. Permite a los usuarios agregar nuevas tareas, actualizar su estado y eliminarlas cuando estén completas.

## Instalación

1. Clona este repositorio: `https://github.com/Nicogg-dev/ChallengeBackv1`
2. Instala las dependencias: `npm install`

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.

   MONGODB_CNN=<Tu cadena de conexión de MongoDB>
   
   PORT=<Puerto en el que desea que funcione el servidor>

## Uso

1. Inicia el servidor: `npm start`
2. Abre Swagger UI en tu navegador: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- Esto proporcionará una interfaz interactiva para probar y explorar las API.

## Documentación

La documentación de la API se genera automáticamente utilizando Swagger. Puedes acceder a la documentación en [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

La API incluye los siguientes endpoints:

- `GET /products`: Obtiene todos los productos.
- `GET /price/{user_id}/{nombre_producto}`: Obtiene el precio especial para el cliente de acuerdo al producto, en caso no tener precio especial se devuelve el precio base.
- `POST /products`: Agrega un producto nuevo.
- `GET /users`: Obtiene todos los usuarios.
- `POST /users`: Agrega un nuevo usuario.
