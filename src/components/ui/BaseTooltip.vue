<template>
   <div>
      <v-tooltip bottom color="purple">
         <template #activator="{ on, attrs }">
            <v-btn
               icon
               :href="navLink"
               :target="newWindow"
               v-bind="attrs"
               v-on="on"
               :to="navTo"
               ><v-icon>{{ iconType }}</v-icon>
            </v-btn>
         </template>
         <span>{{ buttonText }}</span>
      </v-tooltip>
   </div>
</template>

<script>
   export default {
      props: {
         navTo: String,
         iconType: String,
         buttonText: String,
         navLink: String,
         openNew: Boolean,
      },
      computed: {
         newWindow() {
            return this.openNew ? "_blank" : "";
         },
      },
   };
</script>