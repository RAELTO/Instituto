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
                   <button class="btn fw-bold w-50">Cambiar Curso</button>
                </div>
                <div class="col text-center">
                    <img src="assets/User.png" alt="" style="width:50%;">
                    
                </div>
            </div>
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
        
    }
  },

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