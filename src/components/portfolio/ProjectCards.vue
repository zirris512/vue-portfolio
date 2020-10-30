<template>
   <v-card color="green darken-2" dark>
      <v-card-title class="justify-center">
         {{ title }}
      </v-card-title>
      <v-card-text>
         <v-img :src="image" />
      </v-card-text>
      <v-card-actions>
         <v-spacer />
         <base-tooltip
            iconType="mdi-github"
            :buttonText="github"
            :navLink="github"
            :openNew="true"
         />
         <base-tooltip
            iconType="mdi-open-in-new"
            :buttonText="deploy"
            :navLink="deploy"
            :openNew="true"
         />
         <base-tooltip
            iconType="mdi-dots-vertical"
            buttonText="More Details..."
            :navTo="'/portfolio/' + id"
         />
      </v-card-actions>
   </v-card>
</template>

<script>
   export default {
      props: {
         id: String,
         title: String,
         image: String,
         github: String,
         deploy: String,
      },
   };
</script>