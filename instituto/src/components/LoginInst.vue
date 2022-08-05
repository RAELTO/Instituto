<template>
<div class="hero">
  <div class="container">
    <div class="column">
      <h1>Bienvenidos a Instituto x</h1>
      <p>Instituto x es un página en la que los alumnos pueden registrarse en sus materias y cursos favoritos.</p>
    </div>
    <div class="column">
      <div class="wv-tabs">
        <div class="wv-tabs-header">
          <div class="wv-tabs-header__tab wv-tabs-header__tab--active">Iniciar Sesión</div>
        </div>
        <div class="wv-tabs-content">
          <div class="wv-tabs-content__panel wv-tabs-content__panel--active" >

            <div class="wv-divider"></div>
            <div class="wv-form">
              <input class="wv-input" v-model="correo" type="email" placeholder="Correo Electronico"/>
              <input class="wv-input" v-model="pass" type="password" placeholder="Contraseña"/>
              <button class="wv-button"  data-bs-toggle="modal" data-bs-target="#modalcambiopass" type="button"><span>Iniciar Sesión prueba</span></button>
              <div style="margin-top: 10px;" >
            <button  class="wv-button" @click="login">Iniciar Sesión</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Modal Cambio Contraseña -->
<div class="modal fade" id="modalcambiopass"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" >
      <div class="modal-header" id="modalheaderpass">
        <h5 class="modal-title fw-bold" id="exampleModalLabel"  >Cambio de clave</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modalpassbody">
        <div class="row">
          <div class="card" id="cardpass" >
              <div class="card-body" > 
                <h5 class="card-title">Por su seguridad es necesario cambiar su contraseña</h5>
               <p style="color:black ;"> Digite su Nueva contraseña</p>
                <input    class="form-control" >
                <div style="margin-top: 10px ;">
                <p  style="color:black ;" >  Confirme su nueva contraseña</p>
                 <input    class="form-control" >
                 </div >
              </div>
              </div>
            </div>    
            </div>
       <div class="modal-footer" id="modalfooterpass">
        <button type="button" class="btn btn-success">Confirmar</button>
      </div>
    </div>
  </div>
</div>
            <!-- FOOTER -->
            <footer id="footer" class="pb-4 pt-4">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-12 col-lg col-md">
                            <h5 class="text-center mt-2 mb-2">
                            <a href="https://www.ionos.es/digitalguide/paginas-web/derecho-digital/aviso-legal-obligatorio-todo-lo-que-necesitas-saber/#:~:text=Seg%C3%BAn%20el%20art%C3%ADculo%2010%20de,Mercantil%20si%20fuese%20el%20caso.">Información Legal</a>
                        </h5>
                        </div>
                        <div class="col-12 col-lg col-md">
                            <h5 class="text-center mt-2 mb-2">
                            <a href="https://github.com/RAELTO/Instituto">Contacto</a>
                        </h5>
                        </div>
                         <div class="col-12 col-lg col-md">
                            
                            <img src="assets/Logo.png" style="width: 120px;" alt="">
                           
                        </div>
                        <div class="col-12 col-lg col-md">
                            <h5 class="text-center mt-2 mb-2">
                            <a href="#">PQRS</a>
                        </h5>
                        </div>
                       
                        
                        <div class="col-12 col-lg col-md">
                            <h5 class="text-center mt-4 mb-2">
                                Síguenos en redes sociales: 
                                <a href="https://www.facebook.com/profile.php?id=100063570341400"><i class="fab fa-instagram-square"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=100063570341400"><i class="fab fa-facebook-square"></i></a>
                
                                
                            </h5>
                        </div>
                    </div>
                   
                  
                </div>
                 <h5 class="text-center ">© 2022 Instituto Derechos Reservados</h5>
                    <h5 class="text-center ">Instituto X</h5>
            </footer>
            <!-- /FOOTER -->
</template>

<script> 
import axios from 'axios';
export default {
  name: 'LoginInst' ,
  data(){
    return{
        prueba:false,
        correo:'',
        pass:'',
        UserLog:'', 
        token:'',
    }
  },
  methods:{
    async login(){
      const url ='https://instituto-backend.herokuapp.com/api/v1/auth/login'
      await axios.post(url,{
        correo: this.correo,
        contrasena: this.pass,
      })
      .then((response)=>{
        console.log('RESPONSE',response.data);
        this.UserLog = response.data.user;
        this.token = response.data.token;
        this.updateLocal();
        this.updateSesion();
        this.$router.push('/personal');
      }) 
      .catch(err=>{
        console.log(err)
      })
    },
    updateLocal() {
      sessionStorage.setItem("user", JSON.stringify(this.UserLog));
    },
    sesionDatos() {
      if (sessionStorage.getItem("user") !== null) {
        this.UserLog = JSON.parse(sessionStorage.getItem("user"));
      } else {
        this.UserLog= '';
      }
    },
    localDatos() {
      if (localStorage.getItem("token") !== null) {
        this.token = JSON.parse(localStorage.getItem("token"));
      } else {
        this.token= '';
      }
    },
    updateSesion() {
      localStorage.setItem("token", JSON.stringify(this.token));
    },
  },
  created() {
    this.sesionDatos();
    this.localDatos();
  },
  mounted() {},
  computed: {},
}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Poppins:wght@300;600&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
  *{
    font-family: 'Oswald', sans-serif;
    font-family: 'Poppins', sans-serif;
  }
  :root{
    --first: #2a8c4a;
    --second: #64c27b;
    --third:#9bfab0;
    --fourth:#d0fdd7;
    --fifth:#ffffff;
  }


body {
  background: #F3F3F3;
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wv-tabs {
  z-index: 1;
  position: relative;
  background: #FFF;
  width: 400px;
  border-radius: 4px;
  overflow: hidden;
}
.wv-tabs-header {

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.wv-tabs-header__tab {
  background: var(--second);
  width: 100%;
  padding: 20px;
  color: #FFF;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border-color: #212121;
}
.wv-tabs-header__tab--active {
  background: #FFF;
  color: var(--second);
}
/* panel iniciar sesion */
.wv-tabs-content__panel {
  display: none;
  background: var(--second);
  padding: 60px;

}
.wv-tabs-content__panel--active {
  display: block;
}
.wv-button-group {
  display: flex;
  flex-wrap: wrap;
  padding: 13px 23px;
}
.wv-button-group .wv-button {
  width: calc(50% - 14px);
  margin: 7px;
  padding: 12px 20px;
  text-align: left;
}

.wv-button {
  display: block;
  background: var(--first);
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #FFF;
 font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  cursor: pointer;
}
.wv-button .fa {
  background: #FFF;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin: 0 10px 0 0;
  line-height: 24px;
  text-align: center;
}

.wv-divider {
  position: relative;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
  margin: 20px 0;
}
.wv-divider:before {
  content: "Instituto X";
  position: absolute;
  left: 50%;
  top: -50%;
  background: #FFF;
  padding: 0 15px;
  transform: translate(-50%, -50%);
  color: #7E7E7E;
  font-size: 14px;
}
.wv-form {
  margin: -10px 0 0;
  padding: 30px;
}
.wv-input {
  display: block;
  background: #F3F3F3;
  width: 100%;
  border: 0;
  border-radius: 4px;
  margin: 0 0 14px;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #212121;
 font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: normal;
  text-align: center;
}

.hero {
  z-index: 1;
  position: relative;
  background: var(--first);
  min-width: 440px;
  margin: 20px 20px 100px;
  padding: 40px 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.container .column {
  height: 100%;
  padding: 20px;
}

h1 {
  margin: 0 0 20px;
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.4em;
}

p {
  color: #FFF;
 font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.4em;
}
@media (max-width: 980px) {
  .container {
    flex-direction: column;
    flex-wrap: wrap;
    
    
  }
}

@media (max-width: 1500px) {
  h1, p {
    text-align: center;
    
  }
  
  h1 {
    font-size: 40px;
  }
  
  p {
    width: 80%;
    margin: 0 auto;
  }
}

.wv-tabs {
  margin: 0 0 -160px;
}
#modalcambiopass{
color: black;

}
#modalheaderpass{
  background-color: var(--third);
}
#modalpassbody{
  background-color: var(--third);
}
#cardpass{
background-color: var(--third);

}
#modalfooterpass{
   background-color: var(--third);

   
}



#footer {
    background: var(--second) ;
    padding: 310px;
    margin-top: 14%;

 
}

#footer  h6 {
    text-decoration: none;
    color: #000;

}


#footer h5{
    color: white;
    
    
    
}

#footer a{
    color: white;
}

#footer a:hover{
    color: #fff;
}
/*END FOOTER*/
</style>