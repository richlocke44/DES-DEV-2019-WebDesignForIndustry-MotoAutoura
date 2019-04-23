<template>
  <div id="container">
    <div class="col-12 loading" v-if="loader"> 
        <h1>Motoura will load in one moment...</h1>
        <img src="./assets/bikeloader.gif" alt="<bikeloader"/>
        <h1>Thank you for your patience.</h1>
      </div>
    <div class="row logorow" v-if="!loader">
      <div class="col-2">
        
      </div>
      <!-- /.col-2 -->
      <div class="col-8">
        
        <img class="logo" alt="logo" src="./assets/logo2.fw.png" />
        
        <p class="topinfo">Moto Autoura<br>Email: <a href="#">moto@autoura.com</a><br>Tel: 01238 934123<br>Main site: 
        <a href="https://www.autoura.com/">www.autoura.com</a></p>
      </div>
      <!-- /.col-8 -->
      <div class="col-2">
        
      </div>
      <!-- /.col-2 -->
    </div>
    <!-- /.row -->
    <div class="row navrow" v-if="!loader">
      
      <div class="col-2"></div>
      <!-- /.col-2 -->
      <div class="col-8 navbar">
        
        <ul class="nav justify-content-center nav-fill nav-pills desktopnav">
          <li class="nav-item">
            <router-link class="nav-link home" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sign-up" v-if="!user">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link login" to="/log-in" v-if="!user">Log In</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/food" v-if="user">Food</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/accom" v-if="user">Accommodation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/poi" v-if="user">POIs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/attraction" v-if="user">Attractions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/event" v-if="user">Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tour" v-if="user">Tours</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link logout" href="#" @click="logOut" v-if="user">Log Out ({{user.email}})</a>
          </li>
          
         
        </ul>
        <div class="col-12 mobilenav">
          <b-navbar toggleable="lg" type="light"  class="toggle justify-content-end">
          <b-navbar-toggle target="nav-text-collapse" class="toggleitem"></b-navbar-toggle>
          
          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
              <ul class="nav justify-content-center nav-fill nav-pills">
                <li class="nav-item itm2">
                  <router-link class="nav-link home" to="/">Home</router-link>
                </li>
                <li class="nav-item itm2">
                  <router-link class="nav-link" to="/sign-up" v-if="!user">Sign Up</router-link>
                </li>
                <li class="nav-item itm2">
                  <router-link class="nav-link login" to="/log-in" v-if="!user">Log In</router-link>
                </li>
                <li class="nav-item itm2">
                  <router-link class="nav-link" to="/food" v-if="user">Food</router-link>
                </li>
                <li class="nav-item itm2">
                  <router-link class="nav-link" to="/accom" v-if="user">Accommodation</router-link>
                </li>
                <li class="nav-item itm2">
                  <router-link class="nav-link" to="/poi" v-if="user">POIs</router-link>
                </li>
                <li class="nav-item itm2">
                  <router-link class="nav-link" to="/attraction" v-if="user">Attractions</router-link>
                </li>
                <li class="nav-item itm2">
                  <router-link class="nav-link" to="/event" v-if="user">Events</router-link>
                </li>
                <li class="nav-item itm2">
                  <router-link class="nav-link" to="/tour" v-if="user">Tours</router-link>
                </li>
                <li class="nav-item itm2">
                  <a class="nav-link logout" href="#" @click="logOut" v-if="user">Log Out ({{user.email}})</a>
                </li>
          
         
        </ul>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
        
      </div>
      <!-- /.col-8 -->
      <div class="col-2"></div>
      <!-- /.col-2 -->
      
      <div class="col-12">
        
        <router-view></router-view>
      </div>
      <!-- /.col-12 -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import {fb} from './config/Firebase';
import AuthStore from './stores/AuthStore';
import Navbar from 'bootstrap-vue/es/components/navbar';


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
  },
  
  methods: {
    logOut() {
      fb.auth().signOut()
      .then(() => {
        this.user = ""
        this.$router.push('/log-in');
      });
      
    }
  }
};

</script>

<style>
.loading{
  text-align:center;
  margin:0 auto;
  position:absolute;
  top:50vh;
}
.logorow{
  margin-top:50px;
}
.logo{
  width:35%;
}
.navbar {
  width:100%;
}
.desktopnav{
  background-color:red;
  border-radius:10px;
  width:100%;
  padding-left:5px;
  padding-right:5px;
}
.desktopnav .nav-link{
  background-color:red;
  margin:5px 0px 5px 0px;
  color:white;
}
.desktopnav .nav-link:hover{
  background-color:white;
  color:red;
  margin:5px 0px 5px 0px;
}
.topinfo{
  text-align:right;
  float:right;
  width:35%;
  margin-top:100px;
}
.topinfo a{
  color:red;
}
.itm2{
  width:100%;
  color:red;
  }
 
  .itm2 .nav-link{
   
    border-radius:10px;
    
    background-color:white;
    
  }
  
 .mobilenav .nav-link{
  
  margin-top:5px;
 
}
    .toggle{
      background-color:red;
      border-radius:10px;
      
    }
    .toggleitem{
      
      background-color:white;
    }
@media (min-width:992px){
  .mobilenav{
    display:none;
  }
}
@media (max-width:991px){
  .desktopnav{
    display:none;
  }
  .topinfo{
    display:none;
  }
 
  .logo{
    margin-left:12vw;
    width:60%;
  }
}
@media (max-width:1361px){
  .desktopnav{
    font-size:12px;
  }
  .topinfo{
    margin-top:10vh;
  }
}
@media (max-width:1130px){
  .desktopnav{
    font-size:10px;
  }
  .topinfo{
    margin-top:40px;
  }
}
@media (max-width:1014px){
  .desktopnav{
    font-size:9px;
  }
  .topinfo{
    margin-top:30px;
  }
}
</style>
