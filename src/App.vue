<template>
  <div id="app">
    <router-link to="/about"></router-link>
    <router-link to="/Home"></router-link>
  </div>
  <router-view/>
</template>

<script>


export default {
  name: "app",
  
};
</script>

<style>
/* body{
  height: 100vh;
} */

</style>