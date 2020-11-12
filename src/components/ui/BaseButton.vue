<template>
   <v-btn dark :color="color" :href="link">
      <v-icon>{{ icon }}</v-icon>
      <slot />
   </v-btn>
</template>

<script>
   export default {
      props: ["link", "color", "icon"],
   };
</script>