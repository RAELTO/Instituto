const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const bodyParser = require('body-parser')

//server en clase
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            //auth: '/api/auth',
            cursos: '/api/cursos',
            usuarios: '/api/usuarios',
            tipoDocumento: '/api/tipoDocumento',
            estadoUsuario: '/api/estadoUsuario',
        }

        //db connection
        this.connectDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();//dispara el motodo routes
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

    }

    routes() {//my routes configuration

        // parse application/json
        this.app.use(bodyParser.json());

        this.app.get('/', (req, res) => {
            res.send('<h1>Hola desde land page!</h1>');
        });
        
        //this.app.use( this.paths.auth, require('../routes/auth') );
        this.app.use( this.paths.cursos, require('../routes/cursos') );
        this.app.use( this.paths.usuarios, require('../routes/usuarios') );
        this.app.use( this.paths.tipoDocumento, require('../routes/tipoDocumento') );
         this.app.use( this.paths.estadoUsuario, require('../routes/estadoUsuario') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`)
        });
    }

}



module.exports = Server;