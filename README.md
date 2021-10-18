# Comandos

<!-- MarkdownTOC autolink="true" bracket="round" markdown_preview="markdown" -->

-  [Algoritmos (Coding).](#algoritmos)
-  [Patrones de Diseño (PREGUNTAS).](#patrones-de-diseño)
-  [CRUD de Usuarios (OPCIONAL + PLUS)](#crud-de-usuarios)


<!-- /MarkdownTOC -->
### Algoritmos
##Requisitos
	nodejs >= 12
##EJECUSION
Ejcutar los ejercicios de algoritmos es necesario entrar a la carpeta yaydoo_examen_algoritmos_omar_arturo_lopez_rodriguez

```bash
cd yaydoo_examen_algoritmos_omar_arturo_lopez_rodriguez
```
al estar dentro de la carpeta podemos dirigirnos a la carpeta src
```bash
cd src
```
en la que encontraremos los siguientes archivo
1. ejercicios_1.js
2. ejercicios_2.js

para la ejecucion de cada uno de los script es necesario hacerlo de la siguiente markdown_
```bash
node ejercicios_1.js
node ejercicios_2.js
```
### Patrones de Diseño
Problema 1: Un cliente requiere utilizar sendgrid para envíos de email, pero otro cliente
requiere enviarlos por mandril. Se quiere evitar el uso de IF, y realizar un diseño en donde
podamos utilizar más servicios en caso de que un cliente requiera alguno en específico ¿Qué
patrón de diseño utilizarías y por qué?
	Opción 1: Strategy
	Opción 2: Factory Method
	Opción 3: Adapter

Respuesta: La opcion3, ya que este patron como su nombre lo dice se adapta a la funcionalidad que se necesita sin importar el medio o servicio que se este usando, ademas que
es posible agregar mas servicios de correo(tomando como ejemplo el problema anterior). y  que esto de puedan adaptar sin modificar el comportamiento actual.
y como nota su funcionalidad depende de la configuracion del contexto en donde se este utilizando


Problema 2: Explica en tus propias palabras la diferencia entre Factory Method y Abstract
Factory. Y proporciona un caso de uso.

Respuesta: la diferencia radica practicamente en que el patron Factory Method permita tener acceso a un factory method en particular
 

 y la Abstract Factory nos ayuda a crear una fabrica de fabricas es decir que a traves de una clase abstracta podemos tener acceso a diferentes method factory que 

un caso de uso comun para utilizar factory method es al querer tener diferentes conexiones de base de datos.
caso de usaor para abstract factory se podria usar cuando queremos agregar otro tipo de conexion tomando como ejemplo el method factory anterios y que esta nueva factory connection no sea  hacia una BD, posiblemente sea un servicio de teceros y para esto se tendra que crear un nuevo factory method y a traves de este patron de diseño podemos acceder a ambas factories


### CRUD de Usuarios

Para levantar el proyecto de backend es necesario tener instalado lo siguiente
* la version de nodejs >= 12
* mysql
* crear una base de datos
* configurar el archivo .env
A continuacion un ejemplo
```
NODE_ENV=development
# CONFIG APP
API_KEY_APP =2852f3db-7b96-40c0-ab9d-10bd382acb0c
PORT=5000

##BD CONFIG PROD
DB_NAME=yaydoo
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306
DB_TYPE-mysql

SECRET=838B8D67A584BA9537B77C8F56ED1
JWT_EXPIRATION_TIME=900
JWT_ISSUER=Encq191XIwfHJH2I2CUp7RdTnnktaiDt
```

al descargar el respositorio no dirigimos  a la carpeta con el nombre 
yaydoo_examen_backend_omar_arturo_lopez_rodriguez 
posteriormente pasamos a ejecutar los siguientes comandos


```
cd yaydoo_examen_backend_omar_arturo_lopez_rodriguez
npm i
npm migrate
npm seed:all
npm run develop
````
y hasta este punto tendremos levantando nuestro servidor y conectado a la base de datos
al llenar la informacion en la bd se crea un usuario adminstrador
con que el que tendremos accedo al crud-de-usuarios
user:yaydoo@yaydoo.com
pass:12345678

## Pasos para levantar el proyecto de front
requisitos

* la version de nodejs >= 12
* configurar el archivo .env
A continuacion un ejemplo
```
REACT_APP_API_KEY=2852f3db-7b96-40c0-ab9d-10bd382acb0c
REACT_APP_URL_SERVICE=http://localhost:5000
```
NOTA: EL VALR REACT_APP_API_KEY DEBERA SER EL MISMO VALOR QUE CONTIENE EL VALOR DE API_KEY_APP DEL PROYECTO BACKEND

al descargar el respositorio no dirigimos  a la carpeta con el nombre 
yaydoo_examen_frontend_omar_arturo_lopez_rodriguez 
posteriormente pasamos a ejecutar los siguientes comandos
```
cd yaydoo_examen_frontend_omar_arturo_lopez_rodriguez
npm i
npm start
```
