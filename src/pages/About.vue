<template>
    <div class="md:mx-24 mx-4 my-20 p-5 rounded-xl flex-1 bg-white shadow-md">
        <h1 class="text-4xl font-bold">About Me</h1>
        <hr class="my-8" />
        <div class="mb-8 flex md:flex-row flex-col">
            <!-- //! Add profile pic -->
            <img
                src="../assets/images/cat.png"
                alt="cat"
                class="mx-auto md:mx-0 h-64 w-56"
            />
            <p class="mt-auto">
                I am a Full Stack Web Developer with a minor background in
                psychology and engineering to build a better user experience on
                the web. I have a certificate in Full Stack Development from the
                University of Kansas, with newly learned skills in Javascript,
                React.js, MongoDB, MySQL, and more. The projects I have worked
                on vary from simple frontend html/javascript games to more
                complex projects that include building a backend RESTful API and
                external API calls, database setup, authentication, and frontend
                design using frameworks, such as React and Vue. I have been
                known as a strong leader who will take charge by my peers and
                guide everyone to success. I am also a quick learner that can
                remain calm when under pressure and come up with solutions when
                things get tough. My aim is to create an impactful and memorable
                user-experience for my audience. I am excited to use my skills
                on future projects as part of a driven team to create memorable
                experiences for users on the web.
            </p>
        </div>
        <h1 class="text-4xl font-bold text-left">Skills:</h1>
        <hr class="my-8" />
        <div class="flex w-full skills-list flex-col md:flex-row">
            <div class="flex-1 mx-2">
                <h2 class="font-semibold text-2xl text-center">Frontend:</h2>
                <div class="flex flex-wrap py-4 text-center">
                    <p>- HTML</p>
                    <p>- CSS</p>
                    <p>- Javascript</p>
                    <p>- JQuery</p>
                    <p>- Handlebars</p>
                    <p>- Tailwind</p>
                    <p>- Bootstrap</p>
                    <p>- SCSS</p>
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
                    <p>- GIT</p>
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