

<template> 
  <div>
    <nav-bar />
    <router-view />

  </div>
</template>

<script>
import NavBar from "./layout/Navbar.vue";
export default {
  name: "App",
 
  components: {
    NavBar,
  },
};
</script>


<style scoped></style>