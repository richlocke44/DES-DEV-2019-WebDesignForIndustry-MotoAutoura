<template>
    
  <div id="container">
    
    <div class="row">
      
      <div class="col-2">
      </div>
    
      <div class="col-8 background bg-light">
        
        <div class="row row3">
          <h1 class="col-12 title ">Attractions to go to</h1>
        </div>
        
        <div class="row row1">
           
          <div class="col-12">
            <div class="mapcontainer">
              <!-- <h2>Center is {{currentCenter}} , zoom is {{currentZoom}}</h2> -->
              <l-map @update:zoom="zoomUpdate" @update:center="centerUpdate" :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker v-bind:key="index" v-for="(place, index) in places" :lat-lng="latLng(place.location.geocode.lat, place.location.geocode.lng)">
                  <l-icon :icon-size="place.iconSize" :icon-url="icon"></l-icon>
                </l-marker>
              </l-map>
           
            
            </div>
          </div>
        </div>
        
        <div class="row row2">
           
          <div class="col-12">
            <div class="cdcontainer">
                
                <div class="col-12 list">
                    <img class="noattraction justify-content-center" src="../assets/noattractions.fw.png" alt="No Attractions available"/>
                  <div class="card text-left text-black bg-white cards" v-bind:key="index" v-for="(place, index) in places">
                    <h5 class="card-title">{{place.name}}</h5> 
                    <img v-bind:src="place.picture.url" class="card-img-top" alt="Place to eat image not available"/>
                    

                    <div class="card-body">
                      <div class="row">
                        
                        <div class="col-9">
                          <h6 class="card-text" >{{place.location.name}}</h6>
                          <p class="card-text" >{{place.summary}}</p>
                          <p class="card-text">{{place.website_url}}</p>
                        </div>
                  
                          
                        <div class="col-3 buttons">
                          <h6></h6>
                          <button type="button" class="btn btn-danger btn-lg book">Book<br><small>(Coming soon)</small></button><br>
                          <button type="button" class="btn btn-success btn-lg visit">Visit Site >></button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
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
import axios from 'axios';
import{ APIKEY } from '../config/ApiKey.js';
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
import pin from '../assets/MapPin.png';



export default {
    name: 'food',
    props:{
      
    },
    data: function () {
        return{
            key: APIKEY,
            places: Array,
            zoom: 12,
            center: L.latLng(50.907348, -1.398983),
            currentCenter: L.latLng(50.907348, -1.398983),
            currentZoom: 12,
            url:"https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=3b690822f0444ad89ea8219666c18db6",
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(50.907348, -1.398983),
            icon: pin,
            iconSize: [30, 60]
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },
    centerUpdate: function(center) {
      this.currentCenter = center;
    },
    zoomUpdate: function(zoom) {
      this.currentZoom = zoom;
    }
  },
    
    mounted: function() {
    const inst = axios.create({
      headers: { Authorization: "Bearer " + this.key }
    });
    inst
      .get(
        "https://api.autoura.com/api/stops/search?transport_mode=motorbike&stop_types=accom"
      )
      .then(p => {
        this.places = p.data.response;
        console.log(p.data.response);
      })
      .catch(e => {
        console.log(e);
      });
  },
};


</script>

<style scoped>

.cdcontainer{
    overflow-y:scroll;
    height:85vh;
    
}
.noattraction{
    width:100%;
    margin:0 auto;
    margin-top:20px;
}
.background{
  height:100%;
  background-color:dimgrey;
  border-radius:20px;
}
/*.title{
  margin:0 auto;
  text-align:center;
  
}
.introtext{
  text-align:center;
  
}*/

.row1{
    margin-top:40px;
  }
  .row1, .row2{
    margin:0 auto;
    width:auto;
  }
  .row2{
    margin-top:20px;
  }

  .mapcontainer{

height:55vh;
    border-style:solid;
  border-color:red;
  border-width:2px;
  border-radius:20px;
  padding:10px;
  }
    .cards{
        background-color:black;
    margin-top:10px;
    
  border-radius:20px;
  }
  .card-title{
      margin-left:20px;
  }
.cdcontainer{/*
  border-style:solid;
  border-color:red;
  border-width:2px;*/
  background-color:red;
  border-radius:20px;
}
.buttons{
  float:right;

}
.visit{
  margin-top:10px;
}
.btn small{
  font-size:11.5px;
}
.map {
  height: 55vh;
   border-radius:20px;

}
</style>