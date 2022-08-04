<template>
<!-- Buttons -->
  <section>
    <div class="container mt-5 p-3">
      <button class="btn m-2 fw-bold text-white" @click="user"> Usuarios</button>
      <button class="btn m-2 fw-bold text-white" @click="category">Categoría</button>
      <button class="btn m-2 fw-bold text-white" @click="courses">Cursos</button>
    </div>
  </section>
  <!-- Tables -->
  <section>
     <!--User  -->
    <section v-if="view===0">
      <div class="container">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
    <!--Category  -->
    <section v-if="view===2">
      <div class="container">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
    <!-- Courses -->
    <section v-if="view===2">
      <div class="container">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>

  </section>
</template>
<script>
export default {
  data() {
    return{
      view:0,
    }
  },  
  methods:{
    user(){
      this.view=0;
    },
    category(){
      this.view=1;
    },
    courses(){
      this.view=2;
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
button{
  background: var(--first) !important;
}
</style>