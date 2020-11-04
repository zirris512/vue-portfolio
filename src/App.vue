<template>
   <v-app>
      <the-nav @toggle-nav="toggleDrawer" :drawer="drawer"></the-nav>
      <v-navigation-drawer
         v-model="drawer"
         temporary
         right
         app
         width="180"
         color="green lighten-5"
      >
         <v-list>
            <v-list-item><v-btn text to="/about">About</v-btn></v-list-item>
            <v-list-item
               ><v-btn text to="/portfolio">Portfolio</v-btn></v-list-item
            >
            <v-list-item><v-btn text to="/contact">Contact</v-btn></v-list-item>
         </v-list>
      </v-navigation-drawer>
      <v-main>
         <router-view />
      </v-main>
      <the-footer />
   </v-app>
</template>

<script>
   import TheNav from "./components/nav/TheNav.vue";
   import TheFooter from "./components/footer/TheFooter.vue";

   export default {
      components: { TheNav, TheFooter },
      name: "App",

      data: () => ({
         drawer: false,
      }),
      methods: {
         toggleDrawer() {
            this.drawer = !this.drawer;
         },
      },
   };
</script>

<style>
   #app {
      background-image: url("./assets/images/green_background.jpg");
   }
</style>