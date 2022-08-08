<template>
  <!-- Buttons -->
  <section>
    <div class="container mt-5 p-3">
      <button
        class="btn m-2 fw-bold text-white"
        :disabled="view === 0"
        @click="user"
      >
        Usuarios
      </button>
      <button
        class="btn m-2 fw-bold text-white"
        :disabled="view === 1"
        @click="category"
      >
        Categoría
      </button>
      <button
        class="btn m-2 fw-bold text-white"
        :disabled="view === 2"
        @click="courses"
      >
        Cursos
      </button>
    </div>
  </section>
  <!-- Tables -->
  <section>
    <!--User  -->
    <section v-if="view === 0">
      <div class="container">
        <button
          class="btn p-1 m-2 fw-bold text-white"
          data-bs-toggle="modal"
          data-bs-target="#userCreate"
        >
          <i class="bi bi-person-plus-fill p-3"></i>
        </button>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Correo</th>
              <th scope="col">Estado</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>Brayan Esteban</span></td>
              <td><span>Marin Calderon</span></td>
              <td><span>demo@demo.com</span></td>
              <td><span>Activo</span></td>
              <td>
                <button
                  class="btn text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#userEdit"
                >
                  <i class="bi bi-eye-fill"></i>
                </button>
                <button class="btn text-white danger ms-1">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Modal  Crear usuario/Matricula-->
      <div
        class="modal fade"
        id="userCreate"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="staticBackdropLabel">
                Agregar Usuario
              </h5>
              <p
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></p>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre"
                      aria-label="Nombre"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apellido"
                      aria-label="Apellido"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Fecha de Nacimiento"
                      aria-label="Nacimiento"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Teléfono"
                      aria-label="Telefono"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Dirección"
                      aria-label="Direccion"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Correo"
                      aria-label="Correo"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Tipo de documento</option>
                      <option value="1">TI</option>
                    </select>
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="No. Documento"
                      aria-label="NoDocumento"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-12">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Tipo de rol</option>
                      <option value="1">admin</option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <label class="fw-bold col-12 mb-2"> Cargar documento</label>
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                    <label class="input-group-text" for="inputGroupFile02"
                      >Upload</label
                    >
                  </div>
                  <div class="input-group mb-3">
                    <label class="fw-bold col-12 mb-2"> Cargar Imagen</label>
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                    <label class="input-group-text" for="inputGroupFile02"
                      >Upload</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary fw-bold"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary fw-bold">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Editar Usuario -->
      <div
        class="modal fade"
        id="userEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="staticBackdropLabel">
                Editar Usuario
              </h5>
              <p
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></p>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre"
                      aria-label="Nombre"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apellido"
                      aria-label="Apellido"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Fecha de Nacimiento"
                      aria-label="Nacimiento"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Teléfono"
                      aria-label="Telefono"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Dirección"
                      aria-label="Direccion"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Correo"
                      aria-label="Correo"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Tipo de documento</option>
                      <option value="1">TI</option>
                    </select>
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="No. Documento"
                      aria-label="NoDocumento"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-12">
                    <select
                      class="form-select"
                      disabled
                      aria-label="Default select example"
                    >
                      <option selected>Tipo de rol</option>
                      <option value="1">admin</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary fw-bold"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary fw-bold">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Category  -->
    <section v-if="view === 1">
      <div class="container">
        <button class="btn p-1 m-2 fw-bold text-white" data-bs-toggle="modal" data-bs-target="#modalCat">Crear Categoría</button>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>DESARROLLO</td>
              <td>Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previo</td>
              <td>
                <button
                  class="btn text-white"
                  data-bs-toggle="modal" 
                  data-bs-target="#modalCat"
                  @click="chargData()"
                >
                  <i class="bi bi-eye-fill"></i>
                </button>
                <button class="btn text-white danger ms-1">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table> 
      </div> 
      <section>
        <!-- Modal -->
        <div class="modal fade" id="modalCat" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" v-if="typeAction == 0" id="staticBackdropLabel">Agregar categoría</h5>
                        <h5 class="modal-title" v-if="typeAction == 1" id="staticBackdropLabel">Actualizar categoría</h5>
                        <p type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></p>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                              <form class="text-start">
                                    <div class="mb-3">
                                        <label class="form-label">Nombre categoría:</label>
                                        <input type="text" v-model="name" class="form-control" placeholder="ingrese nombre de la categoria">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Descripción:</label>
                                        <textarea class="form-control" v-model="description" id="exampleFormControlTextarea1" rows="3" placeholder="ingrese descripción"></textarea>

                                    </div>
                                </form>                                  
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary fw-bold text-white" data-bs-dismiss="modal" id="">Cancelar</button>
                        <button type="button" v-if="typeAction == 0" @click="registrar()" class="btn fw-bold text-white">Matricularse</button>
                        <button type="button" v-if="typeAction == 1" class="btn fw-bold text-white">Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </section>
    <!-- Courses -->
    <section v-if="view===2">
      <div class="container">
      <button class="btn p-1 m-2 fw-bold text-white"  
      data-bs-toggle="modal"
      data-bs-target="#gradeCreate" 
       >Agregar cursos
       </button>
      <table class="table table-dark table-striped" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre de curso</th>
            <th scope="col">Fecha</th>
            <th scope="col">Cantidad Alumnos</th>
              <th scope="col">Estado</th>
              <th scope="col">Opciones</th>
              
          </tr>
        </thead> 
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Vue.js</td>
            <td>
              <div class="input-append date" id="dp3" data-date="12-02-2012" data-date-format="dd-mm-yyyy">  <input class="span2" size="16" type="text" value="12-02-2012">  <span class="add-on"><i class="icon-th"></i></span></div>
            </td>
            <td>25</td>
           <td><span>Activo</span></td>
             <td>
                <button
                  class="btn text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#gradeEdit"
                >
                  <i class="bi bi-eye-fill"></i>
                </button>
                <button class="btn text-white danger ms-1">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </td>
          </tr>
        </tbody>
      </table>
      </div>
          <!-- Modal  Crear curso-->
      <div
        class="modal fade"
        id="gradeCreate"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="staticBackdropLabel">
                Agregar Curso
              </h5>
              <p
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></p>
            </div>
            <!-- body modal curso -->
            <div class="modal-body">
              <div class="container">
                <div class="row">
                
                  <div class="mb-3 col-12">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Categoria curso </option>
                      <option value="1">Programación</option>
                      <option value="2">Matemáticas</option>

                    </select>
                  </div>
                   <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre Curso"
                      aria-label="NombreCurso"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Cantidad Alumnos"
                      aria-label="CantidadAlumnos"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Fecha Curso"
                      aria-label="FechaCurso"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                
                    <div class="mb-3 col-12">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>activo</option>
                      <option value="1">inactivo</option>
                    </select>
                  </div>
                  <div class="mb-3">
                   <label class="form-label">Descripción:</label>
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese una descripción"></textarea>
                   </div>
                  <div class="input-group mb-3">
                    <label class="fw-bold col-12 mb-2"> Cargar Imagen Curso</label>
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                    <label class="input-group-text" for="inputGroupFile02"
                      >Upload</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary fw-bold"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary fw-bold">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
  
  <div
        class="modal fade"
        id="gradeEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="staticBackdropLabel">
                Agregar Curso
              </h5>
              <p
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></p>
            </div>
            <!-- body modal curso -->
            <div class="modal-body">
              <div class="container">
                <div class="row">
                
                  <div class="mb-3 col-12">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Categoria curso </option>
                      <option value="1">Programación</option>
                      <option value="2">Matemáticas	</option>

                    </select>
                  </div>
                   <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre Curso"
                      aria-label="NombreCurso"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Cantidad Alumnos"
                      aria-label="CantidadAlumnos"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Fecha Curso"
                      aria-label="FechaCurso"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Docente"
                      aria-label="Docente"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                    <div class="mb-3 col-12">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>activo</option>
                      <option value="1">inactivo</option>
                    </select>
                  </div>
                  <div class="mb-3">
                   <label class="form-label">Descripción:</label>
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese descripción del curso"></textarea>
                   </div>
                  <div class="input-group mb-3">
                    <label class="fw-bold col-12 mb-2"> Cargar Imagen Curso</label>
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                    <label class="input-group-text" for="inputGroupFile02"
                      >Upload</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary fw-bold"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary fw-bold">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      view: 0,
      typeAction: 0,
      name: '',
      description: '',
      arrayDataCat: [],
      id_DataCat: 0,
    };
  },   
  methods: {
    catAct(){
      this.typeAction = 1;
    },
    catBasic(){
      this.typeAction = 0;
    },
    user() {
      this.view = 0;
    },
    category() {
      this.view = 1;
    },
    courses() {
      this.view = 2;
    },
    async registrar(){
       const url ='https://instituto-backend.herokuapp.com/api/v1/areas-estudio';
       const data = {
                     "area_estudio": this.name
                    }
       const headers = {
                        headers:{"x-token":this.getToken()}
                       }
       console.log(this.getToken("token"));
      await axios
        .post(url, data, headers)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    },
    listCat(){
      // const url ='https://instituto-backend.herokuapp.com/api/v1/areas-estudio';

    },
    chargData(data = []){
      this.catAct();
      this.id_DataCat = data["id"];
      this.name = data["area_estudio"];
    },
    UpdateDataCat(){

    },
    getToken(){  
      return JSON.parse(localStorage.getItem("token"))
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Poppins:wght@300;600&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
* {
  font-family: "Oswald", sans-serif;
  font-family: "Poppins", sans-serif;
}
:root {
  --first: #2a8c4a;
  --second: #64c27b;
  --third: #9bfab0;
  --fourth: #d0fdd7;
  --fifth: #ffffff;
}
button {
  background: var(--first) !important;
}
.danger {
  background: rgb(237, 52, 52) !important;
}
.modal-content {
  background: var(--fourth);
}
</style>