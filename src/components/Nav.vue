<script setup>
</script>

<template>
    <nav class="nav">
    <div class="contet__logo">
      <a href="#" class="logo">DD.Vill</a>
    </div>
    
    <ul class="menu">
      <li class="menu-list">
        <a class="menu-list__item" href="#projects" rel="noopener">Projects</a>
      </li>
      <li class="menu-list">
        <a  class="menu-list__item" href="#about" rel="noopener">About me</a>
      </li>
    </ul>

    <div class="socials">
      <a class="socials__link" href="https://github.com/VillD" target="_blank" rel="noopener">
        <fa class="socials__item" :icon="['fab','github']"/>
      </a>
      <a class="socials__link" href="https://www.instagram.com/ddaniel.vill/" target="_blank" rel="noopener">
        <fa class="socials__item" :icon ="['fab','instagram']"/>
      </a>
      <a class="socials__link" href="https://www.linkedin.com/in/daniel-rodriguez-villegas-349b01240/" target="_blank" rel="noopener">
        <fa class="socials__item" :icon ="['fab','linkedin']"/>
      </a>
      
    </div>
  </nav>
</template>

<style scoped>

.contet__logo{
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.logo{
  font-size: 2.5rem;
  font-weight: 700;
  color: hsl(63, 69%, 74%);
  border: 2px solid;
  text-align: center;
  padding: 0 1rem;
}
.logo:hover{
  /* color: #fff; */
  background-color:rgb(110, 110, 110);;
}
.nav{
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.menu{
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
}
.nav .menu{
  list-style: none;
}
.menu .menu-list:first-child{
  margin-right: 2rem;
}
.menu .menu-list:last-child{
  margin-left: 2rem;
}
.menu-list .menu-list__item{
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
}

.menu-list__item::after{
  content: '';
  position: absolute;
  width: 0%;
  height: 4px;
  background-color: #fff;
  left: 0;
  bottom: -6px;
  transition: width .3s;
}
.menu-list__item:hover::after{
  width: 100%;
}

.socials{
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;
}
.socials__item{
  display: flex;
  width: 26px;
  height: 26px;
  color: hsl(202, 66%, 39%);
  transition: transform .2s;
}
.socials__link:nth-child(1){
  margin-right: .8rem;
}
.socials__link:nth-child(2){
  margin-right: .8rem;
}
.socials__item:hover{
  /* color: hsl(314, 68%, 96%); */
  /* color: hsl(17, 19%, 55%); */
  color: rgb(110, 110, 110);
  transform: scale(1.05);
}
</style>