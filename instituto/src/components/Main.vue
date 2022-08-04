<template>
    <!-- Carrusel -->
    <main id="main" class="">
        <!-- Carusel -->
        <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/yo.png" class="d-block w-100" alt="Images carousel" style="height: 600px ;">
                    <div class="carousel-caption p-5 mb-5">
                        <h2 class="fw-bold">No se encontraron películas</h2>
                        <p class="h4">Estreno: <span>Undefined</span></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Carusel -->
    </main>
        <!-- /Carrusel -->
    <section class="container-fluid mt-4 w-100">
        <div class="p-3 w-50 div-area">
            <span class="h3 fw-bold ms-2">Cursos</span>
        </div>
    </section>   
    <section class="mt-4">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col col-5">
                    <select class="form-select text-center" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    </select>
                </div>
                <div class="col col-5 ">
                    <div>
                        <input type="email" class="form-control text-center" placeholder="Buscar curso">
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <section id="cartelera" class="mt-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 mt-3 mb-4">
                    <div class="card text-dark bg-light mb-3" style="width: 19rem;">
                        <img src="assets/Logo.png" class="card-img-top" alt="">
                        <h5 class="text-center"><strong></strong></h5>
                        <div class="card-body">
                            <h6 class="card-title">Estreno: <span></span></h6>
                            <h6 class="card-title">Genero: <span></span></h6>
                            <h6 class="card-title">Duracion: <span></span></h6>
                        </div>
                        <div class="card-footer">
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">Boton</button>
                            </div> 
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </section>
            
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
// import axios from 'axios';
export default {
  name: 'LoginInst' ,
  data(){
    return{
        
    }
  },
  methods:{
    
  }
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
.div-area{
    background: var(--third);
}
button{
    background: var(--first) !important; 
    color: var(--fifth) !important;
    font-weight: bold !important;
}
.card{
    box-shadow: black 0.1em 0.1em 0.2em;
    background: var(--fourth) !important;
}
#cartelera .card{
    background-color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: 0.2s ease;
}

#cartelera .card:hover{
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.5);
}
.container .row .col select{
    background: var(--fourth);
    border-radius:20px ;
    font-weight: bold;
}
.container .row .col select option{
    border-radius:20px ;
    font-weight: bold;
}
.container .row .col input{
    background: var(--fourth);
    border-radius:20px ;
    font-weight: bold;
}
body {
  background: #F3F3F3;
  /* width: 100%;
  height: 100%; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}

#footer {
    background: var(--second) ;
    padding: 250px;
    margin-top: 14%;
}

#footer  h6 {
    text-decoration: none;
    color: #000;

}

#footer h6 i{
    font-size: 20px;
    
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