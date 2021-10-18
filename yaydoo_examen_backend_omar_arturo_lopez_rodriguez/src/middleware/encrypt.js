import jwt from "jsonwebtoken";

const createToken = (user, secret, expiresIn) => {
   /*

    user : Objeto con las propiedades indicadas mas abajo. Puede
    ser un objeto vacío '{}' si solo se va a crear un token para
    tener acceso a la api

    secret: palabra secreta que se encuentra en una variable de entorno

    expiresIn: tiempo de expiración para el token. Ejemplo : '24h'


    */

   /*

    Ejemplo de user :

    user = {
        user_id: 114,
        email: hola@test.com,
        roles: {
            public: true,
            admin: true,
            sessionCreator: true,
            sessionUpdater: false
            sessionDeleter: false,
        }
    }

    */
   const { user_id, email, roles } = user;

   /* Asignamos el rol 'public' debido a que es el rol mínimo
       que debe tener el token. Esto porque solamente puede ser
       agregado este rol desde la api hacia el sitio especificado
       en CORS en el archivo app.js
       Además, si 'user' no tiene user_id o email, entonces no se
       agregaran esos mismos datos al token, por lo que hay que
       asegurarse de que por lo menos tenga el rol 'public'
    */
   let options = {
      roles: {
         public: true,
      },
   };

   /* Si user_id y email existen, significa que esta función se ha ejecutado
       dese el resolver LogIn, por lo que se estará creando un token con datos
       del usuario.
       En caso contrario, el token solo tendrá el rol 'public' para verificar
       que ha sido creado desde la api
    */

   if (user_id && email) {
      options = {
         ...options,
         user_id,
         email,
         roles,
      };
   }

   return jwt.sign(options, secret, { expiresIn });
};

export default {
   createToken,
};
