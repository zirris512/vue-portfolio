<template>
   <div>
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
      }),
   };
</script>