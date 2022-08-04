<template>
        <!-- Area personal --> 
        <!-- Etiqueta -->
        <section class="container-fluid mt-4 w-100">
            <div class="p-3 w-50 div-area">
                <span class="h3 fw-bold ms-2">Área personal</span>
            </div>
        </section>
        <!-- Informacion -->
        <section class="container-fluid mt-2">
            <div class="row">
                <div class="col d-flex flex-column ms-5 mt-4">
                   <span class="mb-3"><span class="fw-bold fs-4" >Nombre:</span><span class="fs-3 ms-3" v-if="prueba">Brayan Esteban Marin Calderon</span></span>
                   <span class="mb-3"><span class="fw-bold fs-4">Curso matriculados:</span><span  class=" fs-3 ms-3">0</span> </span>
                   <span class="mb-3"><span class="fw-bold fs-4">Estado:</span><span class=" fs-3 ms-3">Inactivo</span></span>
                   <span class="mb-3"><span class="fw-bold fs-4">Rol: </span> <span class=" fs-3 ms-3">Estudiante</span></span>
                   <button class="btn fw-bold w-50" data-bs-toggle="modal" data-bs-target="#cambioCurso">Cambiar Curso</button>
                </div>
                <div class="col text-center">
                    <img src="assets/User.png" alt="" style="width:50%;">
                    
                </div>
            </div>
            <!-- Modales -->
            <section>
                <!-- Modal -->
                    <div class="modal fade" id="cambioCurso" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold" id="staticBackdropLabel">Formulario cambio de curso</h5>
                            <p type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></p>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col col-12 mt-2 mb-2">
                                      <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">¿Por qué quiere cambiar de curso?</label>
                                      </div>
                                    </div>
                                    <p class="col-12 fw-bold h6 mb-2">Curso a cambiar</p>
                                      <div class="row mb-2">
                                        <div class="col col-6">
                                            <select class="form-select text-center" aria-label="Default select example">
                                            <option selected>Categoría</option>
                                            <option value="1">One</option>
                                            </select>
                                        </div>
                                        <div class="col col-6">
                                            <select class="form-select text-center" aria-label="Default select example">
                                            <option selected>Cursos</option>
                                            <option value="1">One</option>
                                            </select>
                                        </div>
                                      </div>
                                    <p class="col-12 fw-bold h6 mb-2">Curso a trasladarse</p>
                                      <div class="row mb-2">
                                        <div class="col col-6">
                                            <select class="form-select text-center" aria-label="Default select example">
                                            <option selected>Categoría</option>
                                            <option value="1">One</option>
                                            </select>
                                        </div>
                                        <div class="col col-6">
                                            <select class="form-select text-center" aria-label="Default select example">
                                            <option selected>Cursos</option>
                                            <option value="1">One</option>
                                            </select>
                                        </div>
                                      </div> 
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>
        </section>
        <!-- Etiqueta -->
        <section class="container-fluid mt-4 w-100">
            <div class="p-3 w-50 div-area">
                <span class="h3 fw-bold ms-2">Mis cursos</span>
            </div>
        </section>
        <!-- Buscador -->
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
        <!-- Card -->
        <section>
            
        </section>
        <!-- No existen cursos -->
        <section class="mt-5 p-5">
            <div class="container h-100">
                <div class="row">
                    <div class="col text-center">
                        <h1 class="fw-bold mb-5"> Sin cursos matriculados</h1>
                        <img class="img-center" src="assets/danger.png" alt="" style="height:200px;">
                    </div>
                </div>
            </div>
        </section>

</template>

<script>
export default {
  name: 'PersonalAreaInst',
  data(){
    return{
        UserLog:'',
        token:'',
    }
  },
  methods:{
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
</style>