<template>
  <div id="app">
    <div class="relative bg-slate-300 w-full min-h-screen">
      <!-- <index class=" absolute inset-0 z-0" /> -->
      <router-view />
    </div>
  </div>
</template>

<script>

import Login from './views/Home/Login.vue'
export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style>
/* body{
  height: 100vh;
} */

</style>