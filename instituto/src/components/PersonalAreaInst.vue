<template>
  <!-- HEADER -->
        <header>
            <nav id="navbar" class="navbar navbar-expand-lg bg-light navbar-dark">
                <div class="container">
                    <a class="navbar-brand" href="app.html">
                        <img src="../assets/Logo.png" alt="">
                        <span>Instituto</span>
                    </a> 
                    <div v-if="prueba">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">
                                        <img src="../assets/user.png" alt="User">
                                        <span>Brayan Marin</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Área personal</a>
                                </li>
                                <li class="nav-item d-flex">
                                    <a class="nav-link" href="#" @click="logout">Cerrar Sesión
                                    </a>
                                    <h4 class="bi bi-box-arrow-right" ></h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-else>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Iniciar sesión
                                    </a>
                                </li>
                            </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
        <!-- Area personal -->
        <section class="container-fluid mt-4 w-100">
            <div class="p-3 w-50 div-area">
                <span class="h3 fw-bold ms-2">Área personal</span>
            </div>
        </section>
        <section class="container-fluid mt-2">
            <div class="row">
                <div class="col d-flex flex-column ms-5 mt-4">
                   <span><span class="fw-bold fs-4 mb-3" >Nombre:</span><span class="fs-3 ms-3" v-if="prueba">Brayan Esteban Marin Calderon</span></span>
                   <span><span class="fw-bold fs-4 mb-3">Estado:</span><span class=" fs-3 ms-3">0</span></span>
                   <span><span class="fw-bold fs-4 mb-3">Curso matriculados:</span><span  class=" fs-3 ms-3">Inactivo</span> </span>
                   <span><span class="fw-bold fs-4 mb-3">Rol: </span> <span class=" fs-3 ms-3">Estudiante</span></span>
                </div>
                <div class="col">

                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'PersonalAreaInst',
  data(){
    return{
        prueba:true
    }
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
  header{
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
}
#navbar{
    background: var(--second) !important;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
}

#navbar img{
    padding: 0;
    margin: 0;
    height: 60px;
}

#navbar span{
    color: #ffff;
    font-weight: bold;
    text-shadow: black 0.1em 0.1em 0.2em;
}
#navbar span:hover {
    color: #000;
    text-shadow: #ffff 0.1em 0.1em 0.2em;

}
#navbar a{
    color: #ffff;
    font-weight: bold;
    text-shadow: black 0.1em 0.1em 0.2em;
}

#navbar a:hover{
    color: #000;
    text-shadow: #ffff 0.1em 0.1em 0.2em;
}
#navbar ul img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.div-area{
    background: var(--third);
}
</style>