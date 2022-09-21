<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="wrapper">
      <titulo/>
    </div>
  <div class="greetings">
    <div class="content-text">
      <h1 class="green">{{ msg }}<span> <strong class="change-color">Front end</strong> Developer</span> </h1>
      <h3>
        I like to craft and scalable frontend products with great user experiences
      </h3>
    </div>
    <div class="image">
      <img src="images/porfolio-02-edit.png" alt="" width="500">
    </div>
  </div>
</template>

<style scoped>
  .greetings{
    display: flex;
    align-items: center;
  }
.green{
  font-weight: 700;
  font-size: 4.5rem;
  display: inline;
  line-height: 5rem;
  color: #fff;
}
.greetings .content-text{
  margin-right: 2.5rem;
}
.green  span{
  font-weight: 700;
  font-size: 4.5rem;
  display: block;
}
.green .change-color{
  color: #fff;
  font-weight: 700;
  color: hsl(63, 69%, 74%);
}
.image img {
  transform: scale(1);
  transition: transform .2s ease-in-out;
}
.image img:hover{
  transform: scale(1.1);
}
h3{
  color: #fff;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-top: 1em;
}
</style>
