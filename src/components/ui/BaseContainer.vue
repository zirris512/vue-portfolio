<template>
   <v-container class="white rounded my-10">
      <v-row class="mx-5">
         <v-col cols="12">
            <h1 class="teal--text">{{ title }}</h1>
            <v-divider />
            <slot name="main" />
         </v-col>
      </v-row>
      <slot />
   </v-container>
</template>

<script>
   export default {
      props: { title: String },
   };
</script>