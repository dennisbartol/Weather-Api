<template>
  <div id="app">
    <main>
       <div class="search-box">
         <input type="text" class="search-bar" 
           placeholder="Search..." 
           v-model = "query"
           @keypress="fetchWeather" />
       </div>
       
       <div class="weather-wrap" v-if="typeof weather.main != 'undefined' ">
        <div class="location-box">
          <div class="location"> {{weather.name}}, {{weather.sys.country}}</div>
          <div class="date"></div>
       </div>  

      <div class="weather-box">
        <div class="temp">9 C</div>
        <div class="weather">Rain</div>
      </div>
         
    </div>
  </main>  
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
      api_key: '', 
      url_base: 'https://api.openweathermap.org/data/2.5',
      query: '', 
      weather: {}
    }
  },
    methods: { 
      fetchWeather(event) {
        if (event.key == "Enter") {
          fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
          }
        },
      setResults (results) {
        this.weather = results; 
       }
     }  
   }
</script>


<style>
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
  }

body {
  font-family: 'montserrat', sans-serif;
}

#app { 
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover; 
  background-position: bottom: 
  transition: 0.5s; 
}

main { 
  min-height: 100vh; 
  padding: 22px; 

  background-image: linear-gradient(to bottom, #222, #333);
  }

  .search-box {
   width: 90%; 
    margin-bottom: 25px; 
  }

  .search-box .search-bar { 
   display: block; 
   width: 90%; 
   padding: 12px; 
   color: #313131; 
   font-size: 1.5em;
   border: none; 
   outline: none; 
   background: none; 
   background-color: rgba(255, 255, 255, 0.25);
   border-radius: 0px 15px 0px 15px; 
   transition: 0.5s; 
   box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.35);
    
}

.search-box .search-bar:focus { 
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.35); 
  background-color: rgba(255, 255, 255, 0.75);
}
  
</style>
