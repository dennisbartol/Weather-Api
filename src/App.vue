<template>
  <div id="app"  :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : '' ">

 
    <main>
       <div class="search-box">
         <input type="text" class="search-bar" 
           placeholder = "Search..." 
           v-model = "query"
           @keypress = "fetchWeather" />
       </div>
       
       <div class="weather-wrap" v-if="typeof weather.main != 'undefined' ">
        <div class="location-box">
          <div class="location"> {{weather.name}}, {{weather.sys.country}}</div>
          <div class="date"> {{ dateBuild() }} </div>
       </div>  

      <div class="weather-box">
        <div class="temp"> {{ Math.round(weather.main.temp) }} °C</div> <!-- Alt 0176 for the ASCII degree symbol -->
        <div class="weather"> {{ weather.weather[0].main }} </div>
      </div>
         
    </div>
  </main>  
 </div>   
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
       },
        // Added function dateBuild() to build up the .. Full date 
        dateBuild() {
          let build = new Date();
          let months = ["January", "February", "March", "April", "May", "June", "July", "August",
                        "September", "October", "November", "December"];
          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

          let day = days[build.getDay()];
          let date = build.getDate();
          let month = months[build.getMonth()];
          let year = build.getFullYear();
          
          return `${day} ${date} ${month} ${year}`;
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
  background-position: bottom;
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

.location-box .location {
  color: ghostwhite;
  font-size: 4em;
  font-weight: 600;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: ghostwhite;
  font-size: 2em;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}

.weather-box {
  text-align: center;
}  

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: ghostwhite;
  font-size: 6em;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: ghostwhite;
  font-size: 2.5em;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}  
  
</style>
