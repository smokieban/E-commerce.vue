<script setup xmlns="">
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import QuickLinks from "./components/QuickLinks.vue";
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <Navbar/>
  <router-view />
  <QuickLinks/>
  <Footer/>

</template>

<style scoped>
/* Add your other styles here if needed */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<!--
<script setup>
</script>

<template>
  <Header />
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
-->
