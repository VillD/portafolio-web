<script setup>
</script>

<template>

    <section class="projects">
        <p class="projects__main-title">My Project</p>

        <div class="projects-content">
            <article class="project-item">
                <p class="project-item__title">Qr Component</p>
                <p class="project-item__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus odit quam quod 
                    explicabo vitae. Dolorem quas autem provident nobis rerum architecto qui. Illum numquam 
                    dignissimos, reiciendis totam odio vel.
                </p>
                <div class="project-item__image"></div>
            </article>

            <article class="project-item">
                <p class="project-item__title">Landing Page</p>
                <p class="project-item__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus odit quam quod 
                    explicabo vitae. Dolorem quas autem provident nobis rerum architecto qui. Illum numquam 
                    dignissimos, reiciendis totam odio vel.
                </p>
                <div class="project-item__image"></div>
            </article>

            <article class="project-item">
                <p class="project-item__title">Order Component</p>
                <p class="project-item__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus odit quam quod 
                    explicabo vitae. Dolorem quas autem provident nobis rerum architecto qui. Illum numquam 
                    dignissimos, reiciendis totam odio vel.
                </p>
                <div class="project-item__image"></div>
            </article>
        </div>
    </section>

</template>

<style scoped>
.projects{
    min-height:100vh
}
.projects .projects__main-title{
    font-size: 3.5rem;
    font-weight: 500;
    color: hsl(63, 69%, 74%);
    text-align:center;
}
.projects-content{
    display:grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fill);
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
    background-color: hsl(63, 69%, 74%);
    border-radius:30px
}

</style>