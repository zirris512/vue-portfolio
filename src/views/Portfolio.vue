<template>
   <div>
      <!-- <v-app-bar collapse floating>
         <v-app-bar-nav-icon @click="toggleDrawer" />
      </v-app-bar>
      <v-navigation-drawer v-model="drawerOpen" absolute temporary width="300">
         <v-list nav>
            <h3>Projects List</h3>
            <v-list-item v-for="project in projects" :key="project.title">
               <v-btn text>{{ project.title }}</v-btn>
            </v-list-item>
         </v-list>
      </v-navigation-drawer> -->
      <base-container title="Portfolio">
         <v-row class="mx-5">
            <v-col
               cols="12"
               md="4"
               v-for="project in projects"
               :key="project.title"
               class="mb-4"
            >
               <project-cards v-bind="project" />
            </v-col>
         </v-row>
      </base-container>
   </div>
</template>

<script>
   import projects from "../data/projects";
   import ProjectCards from "../components/portfolio/ProjectCards.vue";

   export default {
      components: {
         ProjectCards,
      },
      data: () => ({
         projects,
         // drawerOpen: false,
      }),
      // methods: {
      //    toggleDrawer() {
      //       this.drawerOpen = true;
      //    },
      // },
   };
</script>