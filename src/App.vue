<script setup>
import { RouterLink, RouterView } from 'vue-router'
import titulo from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import Aboutt from './components/WelcomeItem.vue'
import Projects from './components/TheWelcomeProjects.vue'


</script>

<template>
  <div class="content-main">
    <Nav/>
  <header>
    <titulo smg="Hey, I'm a "/>
  </header>

  
  <RouterView />
  </div>
   
  <Aboutt />
  <Projects />
</template>

<style scoped>
  .content-main{
    min-height: 100vh;
    padding-top: 1.5rem;
    display: flex;
    flex-direction:column; 
    animation: aparecer 1s forwards;    
}
header{
  width: 100%;
  flex: 2;
  display: flex;
  align-items:center;
  align-self: flex-start;
  padding: 0 2rem;
}

@keyframes aparecer{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

@media screen and (min-width: 1024px){
  .nav{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
  </style>
  


