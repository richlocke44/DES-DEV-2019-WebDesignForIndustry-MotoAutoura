<template>
  <div class="container">
    <div class="row">
  <div class="col-2"></div>
  <div class="col-8">
      
      <h1 class="text-center">Sign Up</h1>
      <UserForm :confEmail="true" buttonText="Sign Up"  :parentErrors="errors" @form-submitted="submitForm"></UserForm>
      <!-- insert form here -->
      
  </div>
  <div class="col-2"></div>
  </div>
  </div>
</template>

<script>
import {fb} from '../config/Firebase';
import UserForm from "../components/UserForm";

  export default{
    data() {
      return {
        errors: []
      }
    },
    components: { 
      UserForm
    },
    methods: {
      submitForm(user){
        this.errors = [];
        fb.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(()=> {
          this.$router.push('/');
        }).catch(e => {
          this.errors.push(e);
        });
      }
    }
  };
</script>