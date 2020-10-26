<template>
   <v-app-bar app color="green">
      <v-btn text to="/about">Brent Edwards</v-btn>
      <v-spacer />
      <div v-if="!isMobile">
         <v-btn text to="/about">About</v-btn>
         <v-btn text to="/portfolio">Portfolio</v-btn>
         <v-btn text to="/contact">Contact</v-btn>
      </div>
      <div v-else>
         <v-btn @click.stop="toggleDrawer" icon
            ><v-icon>mdi-dots-vertical</v-icon></v-btn
         >
      </div>
   </v-app-bar>
</template>

<script>
   export default {
      props: ["drawer"],
      computed: {
         isMobile() {
            return this.$vuetify.breakpoint.mobile;
         },
      },
      methods: {
         toggleDrawer() {
            this.$emit("toggle-nav");
         },
      },
   };
</script>