 <template>
  <div class="container-sm">
    <!-- Buttons -->
    <section>
      <div class="mt-5 p-3">
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
        <div class="">
          <button
            class="btn p-1 m-2 fw-bold text-white"
            data-bs-toggle="modal"
            data-bs-target="#userCreate"
            @click="action(0)"
          >
            <i class="bi bi-person-plus-fill p-3"></i>
          </button>
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Img</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Correo</th>
                <th scope="col">Estado</th>
                <th scope="col">Rol</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dataUser" :key="item.id">
                <td>
                  <img :src="item.img" alt="" style="width: 50px;">
                </td>
                <td>
                  <span>{{ item.nombre }}</span>
                </td>
                <td>
                  <span>{{ item.apellido }}</span>
                </td>
                <td>
                  <span>{{ item.correo }}</span>
                </td>
                <td>
                  <span
                    :style="{ color: item.id_estado == 1 ? 'green' : 'red' }"
                  >
                    {{ item.id_estado == 1 ? "Activo" : "Inactivo" }}
                  </span>
                </td>
                <td>
                  <span>{{ item.role.nombre_rol }}</span>
                </td>
                <td>
                  <button
                    class="btn text-white"
                    @click="action(1, item)"
                    data-bs-toggle="modal"
                    data-bs-target="#userCreate"
                  >
                    <i class="bi bi-eye-fill"></i>
                  </button>
                  <button
                    :disabled="item.id == userLog.id? true:false"
                    class="btn text-white danger ms-1"
                    @click="deleteUsuarios(item.id)"
                  >
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
                <h5
                  class="modal-title fw-bold"
                  id="staticBackdropLabel"
                  v-if="Usuario.typeAction == 0"
                >
                  Agregar Usuario
                </h5>
                <h5
                  class="modal-title fw-bold"
                  id="staticBackdropLabel"
                  v-if="Usuario.typeAction == 1"
                >
                  Actualizar Usuario
                </h5>
                <p
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></p>
              </div>
              <div class="modal-body">
                <Form @submit="onSubmit">
                  <div class="row">
                    <div class="mb-3 col-6">
                      <Field
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                        aria-label="Nombre"
                        aria-describedby="basic-addon1"
                        name="nombre"
                        :rules="validateNombre"
                        v-model="Usuario.nombre"
                      />
                      <ErrorMessage name="nombre" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        type="text"
                        class="form-control"
                        placeholder="Apellido"
                        aria-label="Apellido"
                        aria-describedby="basic-addon1"
                        name="apellido"
                        :rules="validateApellido"
                        v-model="Usuario.apellido"
                      />
                      <ErrorMessage name="apellido" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        type="date"
                        class="form-control"
                        placeholder="Fecha de Nacimiento"
                        aria-label="Nacimiento"
                        aria-describedby="basic-addon1"
                        name="fecha_nac"
                        :rules="validateFechaNac"
                        v-model="Usuario.fecha_nac"
                      />
                      <ErrorMessage name="fecha_nac" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        type="number"
                        class="form-control"
                        placeholder="Teléfono"
                        aria-label="Telefono"
                        aria-describedby="basic-addon1"
                        name="telefono"
                        :rules="validateTelefono"
                        v-model="Usuario.telefono"
                      />
                      <ErrorMessage name="telefono" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        type="text"
                        class="form-control"
                        placeholder="Dirección"
                        aria-label="Direccion"
                        aria-describedby="basic-addon1"
                        name="direccion"
                        :rules="validateDireccion"
                        v-model="Usuario.direccion"
                      />
                      <ErrorMessage name="direccion" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        type="email"
                        class="form-control"
                        placeholder="Correo"
                        aria-label="Correo"
                        aria-describedby="basic-addon1"
                        name="correo"
                        :rules="validateCorreo"
                        v-model="Usuario.correo"
                      />
                      <ErrorMessage name="correo" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        class="form-select"
                        aria-label="Default select example"
                        as="select"
                        name="tipo_doc_id"
                        :rules="validateTipoDocId"
                        v-model="Usuario.tipo_doc_id"
                      >
                        <option selected value="">Tipo de documento</option>
                        <option
                          :value="item.id"
                          v-for="item in documentData"
                          :key="item.id"
                        >
                          {{ item.tipo_documento }}
                        </option>
                      </Field>
                      <ErrorMessage name="tipo_doc_id" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        type="number"
                        class="form-control"
                        placeholder="No. Documento"
                        aria-label="NoDocumento"
                        aria-describedby="basic-addon1"
                        name="dni"
                        :rules="validateDni"
                        v-model="Usuario.dni"
                      />
                      <ErrorMessage name="dni" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        class="form-select"
                        aria-label="Default select example"
                        as="select"
                        name="rol_id"
                        :rules="validateRolId"
                        v-model="Usuario.rol_id"
                      >
                        <option selected value="">Tipo de rol</option>
                        <option
                          v-for="item in rolData"
                          :value="item.id"
                          :key="item.id"
                        >
                          {{ item.nombre_rol }}
                        </option>
                      </Field>
                      <ErrorMessage name="rol_id" id="error"/>
                    </div>
                    <div class="mb-3 col-6">
                      <Field
                        class="form-select"
                        aria-label="Default select example"
                        as="select"
                        name="id_estado"
                        :rules="validateEstadoId"
                        v-model="Usuario.id_estado"
                      >
                        <option selected value="">Estado</option>
                        <option
                          v-for="item in estadoData"
                          :value="item.id"
                          :key="item.id"
                        >
                          {{ item.estado_usuario ? "Activo" : "Inactivo" }}
                        </option>
                      </Field>
                      <ErrorMessage name="id_estado" id="error"/>
                    </div>
                    <div
                      class="input-group mb-3 col-12"
                      v-if="Usuario.typeAction == 0"
                    >
                      <label class="fw-bold col-12 mb-2">
                        Cargar documento</label
                      >
                        <input
                          type="file"
                          class="form-control"
                          id="doc"
                          @change="getDocumento"
                        />
                      <label class="input-group-text" for="inputGroupFile02"
                        >Upload</label
                      >
                    </div>
                    <div
                      class="input-group mb-3 col-12"
                      v-if="Usuario.typeAction == 0"
                    >
                      <label class="fw-bold col-12 mb-2"> Cargar imagen</label>
                      <input
                        type="file"
                        ref="fotico"
                        class="form-control"
                        id="img"
                        @change="getImage2"
                      />
                      <label class="input-group-text" for="inputGroupFile02"
                        >Upload</label
                      >
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

                    <button
                      as="button"
                      class="btn btn-primary fw-bold"
                      v-if="Usuario.typeAction == 0"
                      @click="postUsuario"
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary fw-bold"
                      data-bs-dismiss="modal"
                      v-if="Usuario.typeAction == 1"
                      @click="putUsuario"
                    >
                      Actualizar
                    </button>
                  </div>
                </Form>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <!--Category  -->
      <section v-if="view === 1">
        <div>
          <button
            class="btn p-1 m-2 fw-bold text-white"
            data-bs-toggle="modal"
            data-bs-target="#modalCat"
          >
            Crear Categoría <i class="bi bi-plus-circle"></i>
          </button>
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th style="width: 120px">Opciones</th>
              </tr>
            </thead>
            <tbody v-if="arrayDataCat.length">
              <tr v-for="data in arrayDataCat" :key="data.id">
                <td v-text="data.area_estudio"></td>
                <td>
                  <button
                    class="btn text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCat"
                    @click="chargData(data)"
                  >
                    <i class="bi bi-eye-fill"></i>
                  </button>
                  <button
                    @click="deleteCat(data.id)"
                    class="btn text-white danger ms-1"
                  >
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="9" class="text-center">No existen elementos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section>
          <!-- Modal -->
          <div
            class="modal fade"
            id="modalCat"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5
                    class="modal-title"
                    v-if="typeAction == 0"
                    id="staticBackdropLabel"
                  >
                    Agregar categoría
                  </h5>
                  <h5
                    class="modal-title"
                    v-if="typeAction == 1"
                    id="staticBackdropLabel"
                  >
                    Actualizar categoría
                  </h5>
                  <p
                    type="button"
                    class="btn-close"
                    @click="clearCat()"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></p>
                </div>
                <div class="modal-body">
                  <div class="">
                    <div class="row">
                      <form class="text-start">
                        <div class="mb-3">
                          <label class="form-label">Nombre categoría:</label>
                          <input
                            type="text"
                            v-model="name"
                            class="form-control"
                            placeholder="ingrese nombre de la categoría"
                          />
                        </div>
                        <!-- <div class="mb-3">
                          <label class="form-label">Descripción:</label>
                          <textarea
                            class="form-control"
                            v-model="description"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="ingrese descripción"
                          ></textarea>
                        </div> -->
                      </form>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary fw-bold text-white"
                    @click="clearCat()"
                    data-bs-dismiss="modal"
                    id=""
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    v-if="typeAction == 0"
                    @click="registrarCat()"
                    data-bs-dismiss="modal"
                    class="btn fw-bold text-white"
                  >
                    Matricularse
                  </button>
                  <button
                    type="button"
                    v-if="typeAction == 1"
                    @click="UpdateDataCat()"
                    data-bs-dismiss="modal"
                    class="btn fw-bold text-white"
                  >
                    Actualizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <!-- Courses -->
      <section v-if="view === 2">
        <div class="">
          <button
            class="btn p-1 m-2 fw-bold text-white"
            data-bs-toggle="modal"
            data-bs-target="#gradeCreate"
          >
            Agregar cursos
          </button>
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Nombre de curso</th>
                <th scope="col">Fecha</th>
                <th scope="col">Cantidad Alumnos</th>
                <th scope="col">Estado</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="objeto in cursosData" :key="objeto.id">
                <td v-text="objeto.nombre_curso"></td>
                <td v-text="objeto.fecha_limite_curso"></td>
                <td v-text="objeto.cupo_disponible"></td>
                <td v-text="objeto.estado_curso"></td>
                <td>
                  <button
                    class="btn text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#gradeCreate"
                     @click="chargCursos(objeto)"
                  >
                    <i class="bi bi-eye-fill"></i>
                  </button>
                  <button
                    @click="deleteCursos(objeto.id)"
                    class="btn text-white danger ms-1"
                  >
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
                  @click="cursosClear()"
                ></p>
              </div>
              <!-- body modal curso -->
              <div class="modal-body">
                <div class="">
                  <div class="row">
                    <div class="mb-3 col-12">
                       <label class="form-label">Categoria:</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="areaEstudioId"
                      >
                        <option value="">Categorias</option>
                        <option
                          :value="item.id"
                          v-for="item in arrayDataCat"
                          :key="item.id"
                        >
                          {{ item.area_estudio }}
                        </option>
                      </select>
                    </div>
                    <div class="mb-3 col-6">
                      <input
                        v-model="nameCurso"
                        type="text"
                        class="form-control"
                        placeholder="Nombre Curso"
                        aria-label="NombreCurso"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="mb-3 col-6">
                      <input
                        v-model="cantidadAlumnos"
                        type="number"
                        class="form-control"
                        placeholder="Cantidad Alumnos"
                        aria-label="CantidadAlumnos"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="mb-3 col-12">
                      <input
                        v-model="fechaCurso"
                        type="date"
                        class="form-control"
                        placeholder="Fecha Curso"
                        aria-label="FechaCurso"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="mb-3 col-12">
                      <label class="form-label">Estado:</label>
                      <select
                        v-model="estadoCurso"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="" selected>Estado</option>
                        <option value="true">activo</option>
                        <option value="false">inactivo</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Descripción:</label>
                      <textarea
                        v-model="descripcion"
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Ingrese una descripción"
                      ></textarea>
                    </div>
                    <div class="input-group mb-3">
                      <label class="fw-bold col-12 mb-2">
                        
                        Cargar Imagen Curso</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        id="imgCursos"
                        @change="getImageCursos"
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
                   @click="cursosClear()"
                >
                  Close
                </button>
                <button
                  type="button"
                  @click="registrarCursos()"
                   v-if="tipoCurso == 0"
                  class="btn btn-primary fw-bold"
                   data-bs-dismiss="modal"
                >
                  Guardar
                </button>
              <button type="button" 
              v-if="tipoCurso == 1"
               data-bs-dismiss="modal" 
              @click="UpdateCursos()" 
              class="btn btn-primary fw-bold">
                  Actualizar datos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import {Form, Field,ErrorMessage} from 'vee-validate'
export default {
  data(){
    return {
      userLog:'',
      clickN:0,
      modal:false,
      view: 0,
      typeAction: 0,
      name: "",
      description: "",
      arrayDataCat: [],
      id_DataCat: 0,
      // Brayan
      dataUser: null,
      documentData: null,
      rolData: null,
      estadoData: null,
      Usuario: {
        updateUser: '',
        typeAction: 0,
        nombre: '', //
        apellido: '', //
        fecha_nac: '', //
        telefono: '', //
        documento: '', //
        tipo_doc_id: '', //
        dni: "", //
        correo: '', //
        direccion: '', //
        rol_id: '', //
        id_estado: '',
        contrasena: '',
        img: "",
        counter:0,
      },
      cursosData: [],
      nameCurso: "",
      cantidadAlumnos: "",
      fechaCurso: "",
      estadoCurso: "",
      descripcion: "",
      areaEstudioId: "",
     id_dataCursos: 0 ,
      imagesCursos: "",
      tipoCurso:0,
    };
  },
  components:{
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    catAct() {
      this.typeAction = 1;
    },
    catBasic() {
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
     cursosCrear() {
      this.tipoCurso = 0;
    },
     cursosAct() {
      this.tipoCurso = 1;
    },
     cursosClear() {
      this.tipoCurso = 0;
      this.nameCurso = null;
      this.cantidadAlumnos = null;
      this.fechaCurso = null;
      this.estadoCurso = null;
      this.descripcion = null;
      this.areaEstudioId = null;
      this. imagesCursos = null;
      
    },
   
    
    async registrarCat() {
      const url =
        "https://instituto-backend.herokuapp.com/api/v1/areas-estudio";
      const data = {
        area_estudio: this.name,
      };
      const headers = {
        headers: { "x-token": this.getToken() },
      };
      console.log(this.getToken("token"));
      await axios
        .post(url, data, headers)
        .then((response) => {
          console.log(response);
          this.message("Categoría registrada", "success");
          this.clearCat();
          this.listCat();
        })
        .catch((error) => {
          console.log(error);
          let msg = error.response.data.msg
          this.message(`${msg}`,'error')
        });
    },
    async listCat() {
      const url =
        "https://instituto-backend.herokuapp.com/api/v1/areas-estudio";
      const headers = { headers: { "x-token": this.getToken() } };
      await axios
        .get(url,headers)
        .then((data) => (this.arrayDataCat = data.data.area))
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteCat(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger danger m-2",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "¿Esta seguro de eliminar este registro?",
          text: "no podras revertir los cambios!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, borrar!",
          cancelButtonText: "Cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const headers = { headers: { "x-token": this.getToken() } };
            const url = `https://instituto-backend.herokuapp.com/api/v1/areas-estudio/${id}`;
            axios
              .delete(url, headers)
              .then((res) => {
                console.log(res);
                this.message("Categoría eliminada", "success");
                this.listCat();
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            const categoria = this.arrayDataCat.filter((e) => {
              return e.id === id;
            });
            swalWithBootstrapButtons.fire(
              "Cacelado",
              `Tu categoria ${categoria[0].area_estudio} no ha sido eliminada`,
              "error"
            );
          }
        });
    },
    chargData(data = []) {
      this.catAct();
      this.id_DataCat = data["id"];
      this.name = data["area_estudio"];
    },
    UpdateDataCat() {
      const headers = { headers: { "x-token": this.getToken() } };
      const url = `https://instituto-backend.herokuapp.com/api/v1/areas-estudio/${this.id_DataCat}`;
      const data = {
        area_estudio: this.name,
      };
      axios
        .put(url, data, headers)
        .then((response) => {
          console.log(response.data);
          this.message("Categoría actualizada", "success");
          this.clearCat();
          this.catBasic();
          this.listCat();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearCat() {
      this.catBasic();
      this.name = null;
      this.description = null;
    },
    message(msj, icono) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: icono,
        title: msj,
      });
    },
    async registrarCursos() {
      const url = "https://instituto-backend.herokuapp.com/api/v1/cursos";
      let estadoCurso = this.estadoCurso == "true" ? true : false;
      let imagesCursos = this.imagesCursos;
      let formData = new FormData();
      formData.append('area_estudio_id', this.areaEstudioId);
       formData.append('nombre_curso', this.nameCurso);
        formData.append('cupo_disponible', this.cantidadAlumnos);
        formData.append('fecha_limite_curso', this.fechaCurso);
        formData.append('estado_curso', estadoCurso);
        formData.append('descripcion', this.descripcion);
        formData.append('img', imagesCursos);
    
      const headers = {
        headers: { "x-token": this.getToken() },
      };
      console.log(this.getToken("token"));
      await axios
        .post(url, formData, headers)
        .then((response) => {
          console.log(response.data);
        this.message("curso creado correctamente","success");
          setTimeout(() => {
              this.getCursos();
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCursos(id) {
     const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger danger m-2",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "¿Esta seguro de eliminar este registro?",
          text: "no podras revertir los cambios!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, borrar!",
          cancelButtonText: "Cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const headers = { headers: { "x-token": this.getToken() } };
            const url = `https://instituto-backend.herokuapp.com/api/v1/cursos/${id}`;
            axios
              .delete(url, headers)
              .then((res) => {
                console.log(res);
                this.message("Curso Eliminado correctamente", "success");
                this.getCursos();
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            const Cursos = this.arrayDataCat.filter((e) => {
              return e.id === id;
            });
            swalWithBootstrapButtons.fire(
              "Cacelado",
              `Tu Curso ${Cursos[0].nameCurso} no ha sido eliminada`,
              "error"
            );
          }
        });
        
    },
    chargCursos(data = []){
          console.log(data);
          this.cursosAct();
       this.id_dataCursos = data["id"];
        this.areaEstudioId = data["area_estudio"];
       this.nameCurso = data["nombre_curso"];
       this.fechaCurso = data["fecha_limite_curso"];
       this.cantidadAlumnos = data["cupo_disponible"];
       this.estadoCurso = data["estado_curso"];
        this.descripcion = data["descripcion"];

    },
    UpdateCursos(){
      const headers = {headers:{"x-token":this.getToken()}};
      const url =`https://instituto-backend.herokuapp.com/api/v1/cursos/${this.id_dataCursos}`;
      const data = {
                     "area_estudio_id": this.areaEstudioId,
                     "name_curso": this.nameCurso,
                     "fecha_limite_curso": this.fechaCurso,
                     "cupo_disponible": this.cantidadAlumnos,
                     "estado_curso": this.estadoCurso,
                     "descripcion": this.descripcion,
                    };
      axios
        .put(url, data, headers)
        .then((response) => {
            console.log(response.data);
            this.message("Categoría actualizada", "success");
            
          this.getCursos();
          
        })
        .catch((error) => {
            console.log(error);
        });
    },

    getToken() {
      return JSON.parse(localStorage.getItem("token"));
    },
    // Usuarios Brayan
    // validaciones de usuario
    validateCorreo(value){
      const regex= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if(this.clickN==0){
        if(!value){
          return 'El Email es requerido';
        }else if(!regex.test(value)){
          return 'No es valido para tipo Email';
        }else{
          return true;
        }
      }else {
        return true
      }

    },
    onSubmit(values) {
      console.log(values, null, 2);
    },
    validateNombre(value){
       if(this.clickN==0){
        if(!value){
          return 'El nombre es requerido';
        }else{
          return true;
        }
      }else {
        return true
      }
    },
    validateApellido(value){
      if(this.clickN==0){
        if(!value){
          return 'El apellido es requerido';
        }else{
          return true;
        }
      }else {
        return true
      }
    },
    validateFechaNac(value){
      if(this.clickN==0){
        if(!value){
          return 'La fecha de nacimiento es requerida';
        }else{
          return true;
        }
      }else {
        return true
      }
      // All is good
    },
    validateTelefono(value){
      if(this.clickN==0){
        if(!value){
          return 'El telefono es requerido';
        }else{
          return true;
        }
      }else {
        return true
      }
    },
    validateTipoDocId(value){
      if(this.clickN==0){
        if(!value){
          return 'Seleccione su tipo de documento';
        }else{
          return true;
        }
      }else {
        return true
      }
    },
    validateDni(value){
      if(this.clickN==0){
        if(!value){
          return 'El numero de documento es requerido';
        }else{
          return true;
        }
      }else {
        return true
      }
    },
    validateDireccion(value){
      if(this.clickN==0){
        if(!value){
          return 'La direccion es requerida';
        }else{
          return true;
        }
      }else {
        return true
      }
    },
    validateRolId(value){
      if(this.clickN==0){
        if(!value){
          return 'Seleccione el rol';
       
        }else{
          return true;
        }
      }else {
        return true
      }
    },
    validateEstadoId(value){
      if(this.clickN==0){
        if(!value){
          return 'Seleccione El estado Activo o Inactivo';
        }else{
          return true;
        }
      }else {
        return true
      }
    },

    async getUsuarios() {
      const url = "https://instituto-backend.herokuapp.com/api/v1/usuarios";
      const headers = { headers: { "x-token": this.getToken() } };
      await axios
        .get(url,headers)
        .then((response) => {
          const data = response.data.results;
          this.dataUser = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteUsuarios(id) {
       const user = this.dataUser.filter((user) => {
              return user.id == id;
            });
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger danger m-2",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: `¿Esta seguro de eliminar a ${user[0].nombre}?`,
          text: "no podras revertir los cambios!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, borrar!",
          cancelButtonText: "Cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const headers = { headers: { "x-token": this.getToken() } };
            const url = `https://instituto-backend.herokuapp.com/api/v1/usuarios/${id}`;
            axios
              .delete(url, headers)
              .then((res) => {
                console.log(res);
                this.getUsuarios();
                this.message(
                  `El usuario ${user[0].nombre} ha sido eliminado correctamente`,
                  "success"
                );
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelado",
              `Tu resgistro no ha sido eliminado`,
              "error"
            );
          }
        });
    },
    async getUsuariosDocument() {
      const url =
        "https://instituto-backend.herokuapp.com/api/v1/tipoDocumento";
      const headers = { headers: { "x-token": this.getToken() } };
      await axios
        .get(url,headers)
        .then((response) => {
          const data = response.data.results;
          this.documentData = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getUsuariosRol() {
      const url = "https://instituto-backend.herokuapp.com/api/v1/roles";
      const headers = { headers: { "x-token": this.getToken() } };
      await axios
        .get(url,headers)
        .then((response) => {
          const data = response.data.results;
          this.rolData = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getUsuariosEstado() {
      const url ="https://instituto-backend.herokuapp.com/api/v1/estadoUsuario";
      const headers = { headers: { "x-token": this.getToken() } };
      await axios
        .get(url,headers)
        .then((response) => {
          const data = response.data.results;
          this.estadoData = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getImage2() {
      this.Usuario.img= document.getElementById('img').files[0]
    },
    getDocumento() {
      this.Usuario.documento= document.getElementById('doc').files[0]
    },
    getImageCursos() {
      this.imagesCursos= document.getElementById('imgCursos').files[0]
    },
    async postUsuario() {
      this.clickN=0;
      const url = `https://instituto-backend.herokuapp.com/api/v1/usuarios`;
      const headers = { headers: { "x-token": this.getToken() }, 'Content-Type': 'multipart/form-data' };
      let {nombre,apellido,fecha_nac,telefono,direccion,correo,tipo_doc_id,dni,rol_id,id_estado,img} = this.Usuario;
      const regex= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if(nombre  !='' && apellido  !='' && fecha_nac !='' && telefono !='' && direccion !='' && correo !='' && tipo_doc_id !='' && dni !='' && rol_id !='' && id_estado !='' ){
        if(img=='') return this.message('Porfavor Ingrese una imagen','error')
        if(regex.test(this.Usuario.correo)){
        let contrasena = this.Usuario.dni.toString();
        let img = this.Usuario.img
        let formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('apellido', apellido); 
        formData.append('fecha_nac', fecha_nac);
        formData.append('telefono', telefono.toString());
        formData.append('documento', this.Usuario.documento);
        formData.append('tipo_doc_id', tipo_doc_id);
        formData.append('dni', dni.toString());
        formData.append('correo', correo);
        formData.append('direccion', direccion);
        formData.append('rol_id', rol_id);
        formData.append('id_estado', id_estado);
        formData.append('contrasena', contrasena);
        formData.append('img', img);
        await axios
          .post(url, formData, headers)
          .then((res) => {
            this.modal=true
            console.log(res);
            setTimeout(() => {
              this.getUsuarios();
            }, 1000);
            this.clickN=1;
            this.Usuario.nombre= '';
            this.Usuario.apellido='';
            this.Usuario.fecha_nac='';
            this.Usuario.telefono='';
            this.Usuario.tipo_doc_id='';
            this.Usuario.dni='';
            this.Usuario.correo='';
            this.Usuario.direccion='';
            this.Usuario.rol_id='';
            this.Usuario.id_estado='';
            this.Usuario.contrasena='';
            this.Usuario.img='';
            
            this.message("El usuario ha sido creado exitosamente", "success");
          })
          .catch((err) => {
            console.log(err);
            this.clickN=0;
          });
        }else{
          console.log('Sintaxis de correo no valida');
        }
      }
    },
    async putUsuario() {
      const user = this.Usuario.updateUser;
      console.log(user);
      const url = `https://instituto-backend.herokuapp.com/api/v1/usuarios/${user.id}`;
      const headers = { headers: { "x-token": this.getToken() } };
      const data = {
        nombre: this.Usuario.nombre,
        apellido: this.Usuario.apellido,
        fecha_nac: this.Usuario.fecha_nac,
        telefono: this.Usuario.telefono.toString(),
        documento: this.Usuario.documento,
        tipo_doc_id: this.Usuario.tipo_doc_id,
        dni: this.Usuario.dni.toString(),
        correo: this.Usuario.correo,
        direccion: this.Usuario.direccion,
        rol_id: this.Usuario.rol_id,
        id_estado: this.Usuario.id_estado,
        contrasena: this.Usuario.contrasena,
      };
      await axios
        .put(url, data, headers)
        .then((res) => {
          console.log(res);
          this.message("El usuario a sido actualizado exitosamente", "success");
          this.getUsuarios();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    action(num, data) {
      if (num == 0) {
        console.log(this.clickN);
        this.clickN=1;
        console.log(this.clickN);
        this.Usuario.typeAction = 0;
        this.Usuario.nombre = '';
        this.Usuario.apellido = '';
        this.Usuario.fecha_nac = '';
        this.Usuario.telefono = '';
        this.Usuario.documento = '';
        this.Usuario.tipo_doc_id = '';
        this.Usuario.dni = '';
        this.Usuario.correo = '';
        this.Usuario.direccion = '';
        this.Usuario.rol_id = '';
        this.Usuario.id_estado = '';
        this.Usuario.contrasena = '';
      } else {
        this.Usuario.updateUser = data;
        const dataUpdate = this.Usuario.updateUser;
        this.Usuario.typeAction = 1;
        this.Usuario.nombre = dataUpdate.nombre;
        this.Usuario.apellido = dataUpdate.apellido;
        this.Usuario.fecha_nac = dataUpdate.fecha_nac;
        this.Usuario.telefono = dataUpdate.telefono;
        this.Usuario.documento = dataUpdate.documento;
        this.Usuario.tipo_doc_id = dataUpdate.tipo_documento.id;
        this.Usuario.dni = dataUpdate.dni;
        this.Usuario.correo = dataUpdate.correo;
        this.Usuario.direccion = dataUpdate.direccion;
        this.Usuario.rol_id = dataUpdate.role.id;
        this.Usuario.id_estado = dataUpdate.id_estado;
        this.Usuario.contrasena = dataUpdate.contrasena;
      }
    },
    validacionUsuario(){
      const user= JSON.parse(sessionStorage.getItem("user"));
      if (user ==null || user == ''){
       return this.$router.push('/')
      }else if(user.rol_id==1){
        this.userLog= user
        }else if(user.rol_id==2){
        this.$router.push('/personal')
      }
        this.getUsuarios();
        this.getUsuariosDocument();
        this.getUsuariosRol();
        this.getUsuariosEstado();
        this.listCat();
        this.getCursos();
    },
    pruebaComponente(){
      console.log('Hola mundo desde personal admin');
    },
    // /Usuarios Brayan 
    async getCursos() {
      const url = "https://instituto-backend.herokuapp.com/api/v1/cursos";
      const headers = {headers: { "x-token": this.getToken() } };
      await axios
        .get(url,headers)
        .then((response) => {
          const data = response.data.courses;
          this.cursosData = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.validacionUsuario();
  },
  computed(){
  }
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
#error{
  color:red;
  font-weight: bold;
}
</style>