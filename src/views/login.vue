<template>
  <div class="container">
    <div class="row">
  <div class="col-2"></div>
  <div class="col-8">
      
      <h1 class="text-center">Log In</h1>
      <UserForm :confEmail="false" buttonText="Log In"  :parentErrors="errors" @form-submitted="submitForm"></UserForm>
  </div>
  <div class="col-2"></div>
  </div>
  </div>
</template>


<script>
import {fb} from '../config/Firebase';
import UserForm from '../components/UserForm';

export default {
  data() {
    return{
      errors: []
    };
  },
  components:{
    UserForm
  },
  methods: {
    submitForm(user){
      this.errors = [];
      fb.auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.$router.push("/");
      }).catch (e => {
        this.errors.push(e);
      });
    }
  }
};
  
</script>