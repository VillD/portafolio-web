<script setup>
</script>

<template>
    <div class="background-section-projects">
        <section id="projects" class="projects">
            <p class="projects__main-title">My Project</p>
    
            <div class="projects-content">
                <article class="project-item">
                    <a target="_blank" href="https://villd.github.io/frontendmentor-qrcomponent/" >
                        <div class="project-item__image">
                            <img src="images/qr-component.png" class="project-item__image--item" alt="">
                        </div>
                    </a>
                    <p class="project-item__title">Qr Component</p>
                    <p class="project-item__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus odit quam quod 
                        explicabo vitae. Dolorem quas autem provident nobis rerum architecto qui.
                    </p>
                </article>
    
                <article class="project-item">
                    <a href="https://villd.github.io/landing-page/" target="_blank">
                        <div class="project-item__image">
                            <img src="images/villd.github.io_landing-page_.png" class="project-item__image--item">
                        </div>
                    </a>
                    <p class="project-item__title">Landing Page</p>
                    <p class="project-item__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus odit quam quod 
                        explicabo vitae. Dolorem quas autem provident nobis rerum architecto qui.
                    </p>
                </article>
    
                <article class="project-item">
                    <a href="https://villd.github.io/order-component/" target="_blank">
                        <div class="project-item__image">
                            <img src="images/order-sumary-component.png" class="project-item__image--item" alt="">
                        </div>
                    </a>
                    
                    <p class="project-item__title">Order Component</p>
                    <p class="project-item__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus odit quam quod 
                        explicabo vitae. Dolorem quas autem provident nobis rerum architecto qui.
                    </p>
                </article>
            </div>
        </section>
    </div>

</template>

<style scoped>
.background-section-projects{
    width: calc(100vw - 18px);
}

.projects{
    min-height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    animation: aparecer .2s forwards ;
}
.projects .projects__main-title{
    font-size: 3.5rem;
    font-weight: 600;
    color: hsl(63, 69%, 74%);
    text-align:center;
}
.projects-content{
    display:flex;
    gap: 1.5rem;
}
.project-item{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding:0 2rem;
}

.project-item .project-item__title{
    color: hsl(63, 69%, 74%);
    font-size: 2rem;
    font-weight:500;
}
.project-item .project-item__paragraph{
    color:#fff;
    font-size: 1rem;
    line-height:1.6rem
}
.project-item .project-item__image{
    width:300px;
    height:350px;
    background-image:linear-gradient( hsl(63, 69%, 74%),  hsl(63, 69%, 74%));
    border-radius:30px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    z-index: 1;
    overflow: hidden;
    transform: scale(1);
    transition: transform .2s linear;
}
.project-item .project-item__image::after{
    content: '';
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 50%);
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    border-radius: 30px;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    transition: transform, opacity .4s linear;
}
.project-item .project-item__image:hover::after{
    opacity: 1;
}
.project-item__image--item{
    border-radius: 30px;
    z-index: -2;
    width: 100%;
    height: auto;
    object-position:center;
}
.project-item__image--item:last-child{
    height: 100%;
}
.project-item__image--item:first-child{
    height: 100%;
}
.project-item .project-item__image:hover{
    transform: scale(1.1);
}
</style>