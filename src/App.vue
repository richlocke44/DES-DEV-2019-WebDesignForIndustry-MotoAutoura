<template>
  <div id="container">
    <div class="row logorow">
      <div class="col-2">
        
      </div>
      <!-- /.col-2 -->
      <div class="col-8">
        <img alt="logo" src="images/logo2.fw.png" style=" width:100%; height:150px"/>
      </div>
      <!-- /.col-8 -->
      <div class="col-2">
        
      </div>
      <!-- /.col-2 -->
    </div>
    <!-- /.row -->
    <div class="row navrow">
      <div class="col-2"></div>
      <!-- /.col-2 -->
      <div class="col-8">
        
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sign-up">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/log-in">Log In</router-link>
          </li>
          
         
        </ul>
        
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

</script>

<style>
.logorow{
  
  margin-top:200px;
}

</style>
