<template>
   <div>
      <v-app-bar collapse floating>
         <v-app-bar-nav-icon @click="toggleDrawer" />
      </v-app-bar>
      <v-navigation-drawer
         v-model="drawerOpen"
         absolute
         dark
         temporary
         width="300"
         color="green darken-3"
      >
         <v-list nav>
            <h3>Projects</h3>
            <v-list-item v-for="project in projects" :key="project.title">
               <v-btn text :to="`/portfolio/${project.id}`">{{
                  project.title
               }}</v-btn>
            </v-list-item>
         </v-list>
      </v-navigation-drawer>
      <base-container :title="selectedProject.title">
         <v-row class="mx-5">
            <v-col> </v-col>
         </v-row>
      </base-container>
   </div>
</template>

<script>
   import projects from "../data/projects";

   export default {
      props: { projectId: String },
      data: () => ({
         projects,
         selectedProject: null,
         drawerOpen: false,
      }),
      methods: {
         toggleDrawer() {
            this.drawerOpen = true;
         },
         selectProject() {
            this.selectedProject = projects.find(
               (project) => project.id === this.projectId
            );
         },
      },
      watch: {
         projectId() {
            this.selectProject();
         },
      },
      created() {
         this.selectProject();
      },
   };
</script>