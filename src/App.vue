<template>
  <div id="app">
    <main>
       <div class="search-box">
         <input type="text" class="search-bar" placeholder="Search..." />
         
       </div>
    </main>  
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
      api_key: ''
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

}
  
  
</style>
