<template>
   <v-row class="mx-5">
      <v-col cols="6">
         <v-list two-line>
            <v-list-item-content v-for="skill in skillsLeft" :key="skill.title">
               <v-list-item-title class="font-weight-medium"
                  >- {{ skill.title }}</v-list-item-title
               >
               <v-list-item-subtitle>{{ skill.subtitle }}</v-list-item-subtitle>
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
               <v-list-item-subtitle>{{ skill.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
         </v-list>
      </v-col>
   </v-row>
</template>

<script>
   export default {
      props: {
         skillsLeft: Array,
         skillsRight: Array,
      },
   };
</script>