<script setup>
import { RouterLink, RouterView } from 'vue-router'
import titulo from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import Aboutt from './components/WelcomeItem.vue'
import Projects from './components/TheWelcomeProjects.vue'


</script>

<template>
   <Nav/>
  <header>
    <titulo msg="Hey, I'm a "/>
  </header>

  
  <RouterView />
  <Aboutt />
  <Projects />
</template>

<style scoped>
header{
  width: 100%;
  flex: 2;
  display: flex;
  align-items:center;
  align-self: flex-start;
  padding: 0 2rem;
}


@media screen and (min-width: 1024px){
  .nav{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
  </style>
  


