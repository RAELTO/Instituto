<template>


                    <!-- Carusel -->
                    <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/vue.png" class="d-block w-100" alt="Images carousel">
                                <div class="carousel-caption p-5 mb-5">
                                    <h2 class="fw-bold ">vue.js</h2>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/POO.png" class="d-block w-100" alt="Images carousel">
                                <div class="carousel-caption p-5 mb-5">
                                    <h2 class="fw-bold ">Programación Orientada a Objetos</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Carusel -->
       <section class="container-fluid mt-4 w-100">
            <div class="p-3 w-50 div-area">
                <span class="h3 fw-bold ms-2">Mis cursos</span>
            </div>
        </section>                
    <section class="mt-4">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col col-5">
                        <select class="form-select text-center" aria-label="Default select example">
                        <option selected> Todas las categorias</option>
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
        <!-- cards cursos -->
<section class="container mb-3">

     
      <div class="row row-cols-1 row-cols-md-3 g-4" >
        <div class="col">
          <div class="card h-100"  id="cardcursos" >
            <img  class="card-img-top" alt="..." src="assets/flutter.png" >
            <div class="card-body">
              <h6 class="card-title" style="row text-center" >Curso avanzado de flutter</h6>
              <p class="card-text"><strong>Fecha de cierre:</strong></p>
            </div>
           
              <button type="button" id="botoncard" class="btn btn-success" >Comprar</button>
           
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
export default {
  name: 'UsuariosInst',
  data(){
    return{
  
    }
  },
  methods:{
    
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
#main .carousel-inner img {
    max-height: 70vh;
    object-fit: fill;
    filter: grayscale(20%);
}

#carousel {
    position: relative;
}

#carousel .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    z-index: 1;
}

#carousel .overlay .container,
#carousel .overlay .row {
    height: 100%;
}
.div-area{
    background: var(--third);
    
}
.modal-content{
  background: var(--third);
}
#floatingTextarea{
  background: var(--fourth);
}
button{
    background: var(--first) !important;
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
  #cardcursos {
    width: 300px;
    padding: 25px 40px;
    margin-top: 20%;
   
    /* padding: 10px 30px 70px 30px; */
/*     
    width: 50%; */
    
    background-color: var(--third);
    border-radius: 20px;
    box-shadow: 0px 0px 30px 5px gray;
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