<script setup>
</script>

<template>
  <section class="about">
    <div class="about-content" id="about">
      <p class="about-content__title">About me</p>
      <p class="about-content__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit inventore impedit facere, ducimus ad pariatur earum enim! Reprehenderit maiores excepturi consequuntur fuga odio reiciendis nulla officia enim. Voluptates, necessitatibus?
        Molestiae possimus harum eos nihil nesciunt ducimus voluptatem magnam quibusdam? Maxime ex praesentium, exercitationem quo voluptatibus porro a id quibusdam temporibus eos, soluta dicta modi debitis aliquam provident, fugiat error.
        Placeat vitae laborum ab non incidunt asperiores consectetur rerum aspernatur ex eius beatae voluptas nisi, voluptates omnis sunt delectus, ad voluptate nihil possimus corrupti iste quibusdam? Blanditiis laborum error dolor.
        Officiis assumenda, vero fugiat dolore cum sint tenetur incidunt? Modi voluptatibus magnam totam repudiandae accusamus, est a voluptatem aperiam, distinctio, minus saepe quibusdam vero perferendis quidem ea quisquam officia! Voluptatum?
        Dolorum necessitatibus dolorem est, praesentium cumque numquam iusto. Quidem rem, ad maxime recusandae consequatur commodi. Deserunt iste inventore hic eum quisquam ducimus recusandae sit cupiditate, excepturi eveniet omnis dolores quam.
      </p> 
    </div>
    <div class="about-img">
        <div class="about-img__img-provi"></div>
      </div>
  </section>
</template>
<style scoped>
  
  .about{
    min-height: 100vh;
    display: flex;
    padding: 0 2rem;
  }
  .about-content{
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 1.5rem;
    justify-content: center;
  }
  .about-content .about-content__title{
    font-size: 3.5rem;
    font-weight: 600;
    color: hsl(63, 69%, 74%);
  }

  .about-content .about-content__paragraph{
    font-size: 1rem;
    line-height: 1.6rem;
    color: #fff;
    text-align: justify;
  }
  .about-img{
    flex: 2;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .about-img .about-img__img-provi{
    width: 400px;
    height: 400px;
    border-radius: 20px;
    background-color: antiquewhite;
  }

</style>
