<template>
   <div>
      <v-btn fab bottom right fixed dark @click="toggleDrawer">
         <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <v-navigation-drawer
         v-model="drawerOpen"
         right
         absolute
         dark
         temporary
         width="200"
         color="green darken-3"
      >
         <v-list nav>
            <h3>Projects</h3>
            <v-list-item v-for="project in projects" :key="project.title">
               <v-btn text :to="`/portfolio/${project.id}`">
                  {{ project.title }}
               </v-btn>
            </v-list-item>
         </v-list>
      </v-navigation-drawer>
      <base-container :title="selectedProject.title">
         <v-row class="mx-5">
            <v-col cols="12">
               <v-img
                  class="float-center ma-4 ml-0"
                  :src="selectedProject.largeImg"
               />
               <p>{{ selectedProject.description }}</p>
            </v-col>
         </v-row>
         <v-row class="mx-5">
            <v-col cols="12" md="6">
               <h3>Technologies Used:</h3>
               <v-list>
                  <v-list-item
                     v-for="tech in selectedProject.technologies"
                     :key="tech"
                  >
                     {{ tech }}
                  </v-list-item>
               </v-list>
            </v-col>
            <v-col cols="12" md="6">
               <h3>Project Links:</h3>
               <v-list>
                  <v-list-item>
                     <base-button
                        color="black"
                        :link="selectedProject.github"
                        icon="mdi-github"
                        target="_blank"
                     >
                        GitHub
                     </base-button>
                  </v-list-item>
                  <v-list-item>
                     <base-button
                        color="purple"
                        icon="mdi-open-in-new"
                        :link="selectedProject.deploy"
                        target="_blank"
                     >
                        Deployed Page
                     </base-button>
                  </v-list-item>
               </v-list>
            </v-col>
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