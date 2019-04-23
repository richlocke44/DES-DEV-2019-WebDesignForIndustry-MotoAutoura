<template>
  <div id="container">
    <div class="row">
      <div class="col-2">
      </div>
    
      <div class="col-8 background">
        <div class="row introtext">
          
        <h1 class="title">Welcome to Motoura</h1>
        <div class="topbox">
        <p class="intro">The home to all the travelling information & destinations provided by Autoura autonomous vehicle touring that is 
        all accessible by motorbike or scooter.</p>
        <h3 class="attention" v-if="!user">ATTENTION</h3>
        <p class="intro2" v-if="!user">Please <router-link class="homelink" to="/sign-up" v-if="!user">Sign Up</router-link> 
        and <router-link class="homelink" to="/log-in" v-if="!user">Log In</router-link> 
        to be able to view the Moto Autoura information and locations.</p>
        
        <br><p class="intro3">If you would like more information about Autoura then please <a class="atlink" href="https://www.autoura.com/">Click Here</a> 
        or use the link at the top right of the page.</p>
        
        </div>
        </div>
        
        <div class="row row1"> 
          <div class="col-6">
            <div class="card homeitem">
            <h2 class="cardtitle">Places to eat</h2>
            <img class="homeimg" src="../assets/placetoeat.jpg" alt="PlaceToEat" style="width:100%;"/>
            <div class="row">
              <div class="div col-8"></div>
              <div class="div col-4">
            <button type="button" class="btn btn-outline-secondary viewmore justify-content-end" v-if="user">
              <router-link class="" to="/food" >View More</router-link></button>
              </div>
              </div>
            <p></p>
          </div>
        </div>
        <div class="col-6">
            <div class="card homeitem">
            <h2 class="cardtitle">Places to stay</h2>
            <img class="homeimg" src="#" alt="PlaceToEat"/>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <p></p>
          </div>
        </div>
        </div>
        <div class="row row2"> 
          <div class="col-6">
            <div class="card homeitem">
            <h2 class="cardtitle">Places of interest</h2>
            <img class="homeimg" src="#" alt="PlaceToEat"/>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <p></p>
          </div>
        </div>
        <div class="col-6">
            <div class="card homeitem">
            <h2 class="cardtitle">Attractions to go to</h2>
            <img class="homeimg" src="#" alt="PlaceToEat"/>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <p></p>
          </div>
        </div>
        </div>
        <div class="row row3"> 
          <div class="col-6">
            <div class="card homeitem">
            <h2 class="cardtitle">Events to go to</h2>
            <img class="homeimg" src="#" alt="PlaceToEat"/>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <p></p>
          </div>
        </div>
        <div class="col-6">
            <div class="card homeitem">
            <h2 class="cardtitle">Tours to go on</h2>
            <img class="homeimg" src="#" alt="PlaceToEat"/>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <p></p>
          </div>
        </div>
        </div>
        
      </div>
      <div class="col-2">
      
      </div>
      
    </div>
  </div>
</template>

<script>
import {fb} from '../config/Firebase';
import AuthStore from '../stores/AuthStore';

export default {
  data() {
  return{
    user: "",
    loader: true
  };
  },
  
  created () {
    fb.auth().onAuthStateChanged(user => {
      
      this.loader = false;
      if (user) {
        this.user = user;
        AuthStore.setAuthAction(user);
        this.$router.push('/');
      } else {
        AuthStore.clearAuthAction();
        
      }
    });
  }
};
  
</script>

<style type="text/css">
.background{
  height:auto;
}
.title, .intro2, .intro4{
  margin:0 auto;
  text-align:center;
  
}
.attention{
  color:red;
}
.homelink:hover{
  color:grey;
}
.topbox{
  border-style:solid;
  border-color:red;
  border-width:2px;
  border-radius:20px;
  padding:10px;
}
.introtext{
  text-align:center;
  
}
.intro{
  margin-top:20px;
}
.intro3 a {
  text-decoration: none;
  color:red;
 
}
.intro3 a:hover {
  text-decoration: none;
  color:grey;
  
}
.intro2 a, .intro4 a{
  color:red;
  text-decoration: none;
}

.row1{
    margin-top:40px;
  }
  .row1, .row2, .row3{
    margin:0 auto;
    width:auto;
  }
  .row2, .row3{
    margin-top:20px;
  }
  .cardtitle{
    width:100%;
    text-align:center;
    float:left;
  }
  .homeitem{
    /*height:400px;*/
    border-style:solid;
  border-color:red;
  border-width:2px;
  border-radius:20px;
  margin-top:20px;
  padding:5px;
  
  }
  .homeimg{
    float:left;
  }
.viewmore {
  width:auto;
  float:right;
}
  
</style>