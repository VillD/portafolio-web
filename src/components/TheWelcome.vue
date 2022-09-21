<script setup>
</script>

<template>
  <section class="section">
    <div class="section-box">
      <p class="section-box__title">Web Design<fa class="section-box__icon" :icon ="['fas','pen-nib']"/><i class="fa-regular fa-pen-nib"></i> </p>
      
    </div>
    <div class="section-box">
      <p class="section-box__title">Coding<fa class="section-box__icon" :icon ="['fas','code']"/></p>
      
    </div>
    <div class="section-box">
      <p class="section-box__title">App Developer<fa class="section-box__icon" :icon ="['fas','mobile-screen-button']"/></p>
      
    </div>
  </section>
</template>

<style scoped>
.section{
  display: flex;
  width: 30%;
  justify-content: space-between;
  
}
.section-box{
    padding-bottom: 2rem;
    position: relative;
    
}
.section-box .section-box__title{
  position: absolute;
  font-size: 1rem;
  font-weight: 300;
  white-space: nowrap;
  bottom:-20px;
  animation: up 1.5s;
  animation-fill-mode: forwards;
  color: #fff;
  
}
.section-box .section-box__icon{
  width: 1rem;
  height: 1rem;
  margin-left: .2rem;
  color: hsl(63, 69%, 74%);
}
@keyframes up{
  from{
    bottom: -20px;
    opacity: 0;
  }
  to{
    bottom: 30px;
    opacity: 1;
  }
}
@media (min-width: 1024px) {

}
</style>
