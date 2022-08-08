const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

//server en clase
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/v1/auth',
            cursos: '/api/v1/cursos',
            usuarios: '/api/v1/usuarios',
            tipoDocumento: '/api/v1/tipoDocumento',
            estadoUsuario: '/api/v1/estadoUsuario',
            matriculas: '/api/v1/matriculas',
            matriculasXcurso:'/api/v1/matriculasXcurso',
            roles: '/api/v1/roles',
            estadoMatricula: '/api/v1/estadoMatricula',
            areas: '/api/v1/areas-estudio',
            uploads: '/api/v1/uploads',
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

        //Lectura y parseo body
        this.app.use( express.json() );

        // Fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));

    }

    routes() {//my routes configuration

        this.app.get('/', (req, res) => {
            res.send('<h1>Hola desde land page!</h1>');
        });
        
        this.app.use( this.paths.auth, require('../routes/auth') );
        this.app.use( this.paths.cursos, require('../routes/cursos') );
        this.app.use( this.paths.usuarios, require('../routes/usuarios') );
        this.app.use( this.paths.tipoDocumento, require('../routes/tipoDocumento') );
        this.app.use( this.paths.estadoUsuario, require('../routes/estadoUsuario') );
        this.app.use( this.paths.matriculas, require('../routes/matricula') );
        this.app.use( this.paths.matriculasXcurso, require('../routes/matriculaXcurso') );
        this.app.use( this.paths.roles, require('../routes/roles') );
        this.app.use( this.paths.estadoMatricula, require('../routes/estadoMatricula') );
        this.app.use( this.paths.areas, require('../routes/areas') );
        this.app.use( this.paths.uploads, require('../routes/uploads') );

        this.app.get('*', (req, res) => {
            res.status(404).send(`<h1>404 | Endpoint: " ${req.url} " not found</h1>`);
        });
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`)
        });
    }

}



module.exports = Server;