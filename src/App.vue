<template>
   <v-app>
      <the-nav @toggle-nav="toggleDrawer" :drawer="drawer"></the-nav>
      <v-navigation-drawer v-model="drawer" temporary right app>
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
   </v-app>
</template>

<script>
   import TheNav from "./components/nav/TheNav.vue";

   export default {
      components: { TheNav },
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
