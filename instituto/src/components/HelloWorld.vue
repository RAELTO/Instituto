<template>
  <div id="app">
    <Form @submit="onSubmit">
      <div class="mb-3 col-6">
        <Field
          type="text"
          name="nombre"
          class="form-control"
          placeholder="Nombre"
          aria-label="Nombre"
          aria-describedby="basic-addon1"
          :rules="validateNombre"
          v-model="Usuario.nombre"
        />
        <ErrorMessage name="nombre" id="error"/>
      </div>
      <button>Hola</button>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  data(){
    return{
      Usuario:{
        nombre:''
      }
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
        onSubmit(values) {
      console.log(values, null, 2);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },
    validateNombre(value){
      if(!value){
        return 'El nombre es requerido';
      }
      // All is good
      return true;
    },
  },
};
</script>