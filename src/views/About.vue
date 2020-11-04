<template>
   <div>
      <base-container title="About Me">
         <template #main>
            <v-img
               src="../assets/images/calm_rain.jpg"
               width="200"
               class="float-left ma-4 ml-0"
            ></v-img>
            <p>
               Full Stack Web Developer with a minor background in psychology
               and engineering to build a better user experience on the web.
               Recently earned a certificate in Full Stack Development from the
               University of Kansas, with newly learned skills in Javascript,
               React.js, Vuejs, MongoDB, and more. I have been known as a strong
               leader who will take charge by my peers and guide everyone to our
               goals. I am also a quick learner that can remain calm when under
               pressure and come up with solutions when things get tough. My aim
               is to create an impactful and memorable user-experience for my
               audience. I worked on a project where I applied the Phaser.js
               engine to a React.js app in a group of five to make an escape
               room like game where users could log in through authentication
               via Passport and MongoDB and play through a sequence of puzzles
               to escape a room. I am excited to use my skills on future
               projects as part of a driven team to create memorable experiences
               for users on the web.
            </p>
         </template>
         <v-row class="mx-5">
            <v-col cols="12">
               <h3>Skills/Technologies:</h3>
               <v-divider />
            </v-col>
         </v-row>
         <large-about
            v-if="!isMobile"
            :skillsLeft="skillsLeft"
            :skillsRight="skillsRight"
         />
         <small-about v-else :skillsList="fullList" />
      </base-container>
   </div>
</template>

<script>
   import SmallAbout from "../components/about/SmallAbout.vue";
   import LargeAbout from "../components/about/LargeAbout.vue";

   export default {
      components: {
         SmallAbout,
         LargeAbout,
      },
      data: () => ({
         skillsLeft: [
            { title: "Javascript", subtitle: "Vanilla, JQuery" },
            { title: "HTML5", subtitle: "" },
            { title: "CSS3", subtitle: "SCSS, Bootstrap, Bulma" },
            { title: "Reactjs", subtitle: "Hooks, Redux, React-Router" },
         ],
         skillsRight: [
            { title: "Vuejs", subtitle: "2.x, 3.x, Vuex, Vue-Router, Vuetify" },
            { title: "Nodejs", subtitle: "Express" },
            {
               title: "Databases",
               subtitle: "MySQL, MongoDB, Mongoose, Sequelize, Firebase",
            },
            { title: "GIT", subtitle: "Git Bash, GitHub" },
         ],
      }),
      computed: {
         isMobile() {
            return this.$vuetify.breakpoint.mobile;
         },
         fullList() {
            return this.skillsLeft.concat(this.skillsRight);
         },
      },
   };
</script>