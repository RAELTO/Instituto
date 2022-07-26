const express = require('express');
const cors = require('cors');

//server en clase
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            //auth: '/api/auth',
            cursos: '/api/cursos',
        }

        //db connection

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();//dispara el motodo routes
    }

    middlewares() {
        //CORS
        this.app.use( cors() );
    }

    routes() {//my routes configuration

        this.app.get('/', (req, res) => {
            res.send('<h1>Hola desde land page!</h1>');
        });

        //this.app.use( this.paths.auth, require('../routes/auth') );
        this.app.use( this.paths.cursos, require('../routes/cursos') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`)
        });
    }

}



module.exports = Server;