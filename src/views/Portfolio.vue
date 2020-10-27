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
               <v-card color="green darken-2" dark>
                  <v-card-title class="justify-center">{{
                     project.title
                  }}</v-card-title>
                  <v-card-text>
                     <v-img :src="project.image" />
                  </v-card-text>
                  <v-card-actions>
                     <v-spacer />
                     <v-tooltip bottom color="purple">
                        <template #activator="{ on, attrs }">
                           <v-btn
                              icon
                              :href="project.github"
                              target="_blank"
                              v-bind="attrs"
                              v-on="on"
                              ><v-icon>mdi-github</v-icon></v-btn
                           >
                        </template>
                        <span>{{ project.github }}</span>
                     </v-tooltip>
                     <v-tooltip bottom color="purple">
                        <template #activator="{ on, attrs }">
                           <v-btn
                              icon
                              :href="project.deploy"
                              target="_blank"
                              v-bind="attrs"
                              v-on="on"
                              ><v-icon>mdi-open-in-new</v-icon></v-btn
                           >
                        </template>
                        <span>{{ project.deploy }}</span>
                     </v-tooltip>
                     <v-tooltip bottom color="purple">
                        <template #activator="{ on, attrs }">
                           <v-btn
                              icon
                              v-bind="attrs"
                              v-on="on"
                              :to="'/portfolio/' + project.id"
                              ><v-icon>mdi-dots-vertical</v-icon></v-btn
                           >
                        </template>
                        <span>More Details...</span>
                     </v-tooltip>
                  </v-card-actions>
               </v-card>
            </v-col>
         </v-row>
      </base-container>
   </div>
</template>

<script>
   import projects from "../data/projects";

   export default {
      data: () => ({
         projects: projects,
         // drawerOpen: false,
      }),
      // methods: {
      //    toggleDrawer() {
      //       this.drawerOpen = true;
      //    },
      // },
   };
</script>