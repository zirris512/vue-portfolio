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
         <v-row class="mx-5">
            <v-col cols="6">
               <v-list two-line>
                  <v-list-item-content
                     v-for="skill in skillsLeft"
                     :key="skill.title"
                  >
                     <v-list-item-title class="font-weight-medium"
                        >- {{ skill.title }}</v-list-item-title
                     >
                     <v-list-item-subtitle>{{
                        skill.subtitle
                     }}</v-list-item-subtitle>
                  </v-list-item-content>
               </v-list>
            </v-col>
            <v-col cols="6">
               <v-list two-line>
                  <v-list-item-content
                     v-for="skill in skillsRight"
                     :key="skill.title"
                  >
                     <v-list-item-title class="font-weight-medium"
                        >- {{ skill.title }}</v-list-item-title
                     >
                     <v-list-item-subtitle>{{
                        skill.subtitle
                     }}</v-list-item-subtitle>
                  </v-list-item-content>
               </v-list>
            </v-col>
         </v-row>
      </base-container>
   </div>
</template>

<script>
   export default {
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
   };
</script>