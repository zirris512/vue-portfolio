<template>
    <div class="md:mx-24 mx-4 my-20 border-black">
        <h1 class="text-4xl font-bold">About Me</h1>
        <hr class="my-8" />
        <div class="mb-8">
            <img src="../assets/images/cat.png" alt="cat" class="float-left" />
            <p>
                Full Stack Web Developer with a minor background in psychology
                and engineering to build a better user experience on the web.
                Recently earned a certificate in Full Stack Development from the
                University of Kansas, with newly learned skills in Javascript,
                React.js, Vuejs, MongoDB, and more. I have been known as a
                strong leader who will take charge by my peers and guide
                everyone to our goals. I am also a quick learner that can remain
                calm when under pressure and come up with solutions when things
                get tough. My aim is to create an impactful and memorable
                user-experience for my audience. I worked on a project where I
                applied the Phaser.js engine to a React.js app in a group of
                five to make an escape room like game where users could log in
                through authentication via Passport and MongoDB and play through
                a sequence of puzzles to escape a room. I am excited to use my
                skills on future projects as part of a driven team to create
                memorable experiences for users on the web.
            </p>
        </div>
        <h1 class="text-4xl font-bold text-left">Skills/Technologies:</h1>
        <hr class="my-8" />
        <div class="flex w-full skills-list flex-col md:flex-row">
            <div class="flex-1 mx-2">
                <h2 class="font-semibold text-2xl text-center">Frontend:</h2>
                <div class="flex flex-wrap py-4 text-center">
                    <p>- HTML</p>
                    <p>- CSS</p>
                    <p>- Javascript</p>
                    <p>- Vuejs</p>
                    <p>- Reactjs</p>
                </div>
            </div>
            <div class="flex-1 mx-2">
                <h2 class="font-semibold text-2xl text-center">Backend:</h2>
                <div class="flex flex-wrap py-4 text-center">
                    <p>- MySQL</p>
                    <p>- MongoDB</p>
                    <p>- Nodejs</p>
                    <p>- Express</p>
                    <p>- Firebase</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        setup() {},
    });
</script>

<style scoped>
    .skills-list p {
        width: 50%;
        padding: 0.25rem 0;
    }
</style>