<template>
   <div>
      <base-container title="Contact">
         <template #main>
            <p>
               Please feel free to contact me or check out my work from any of
               the links below!
            </p>
         </template>
         <v-row class="mx-5">
            <v-col cols="12" class="text-center">
               <v-list>
                  <v-list-item>
                     <base-button
                        icon="mdi-github"
                        color="black"
                        link="https://github.com/zirris512"
                        target="_blank"
                        >GitHub</base-button
                     >
                  </v-list-item>
                  <v-list-item>
                     <base-button
                        icon="mdi-linkedin"
                        color="blue darken-1"
                        link="https://www.linkedin.com/in/brentleigh-edwards-0b29a3140/"
                        target="_blank"
                     >
                        LinkedIn
                     </base-button>
                  </v-list-item>
                  <v-list-item>
                     <base-button
                        icon="mdi-email"
                        color="red"
                        link="mailto:brentedwards512@gmail.com"
                        >Email</base-button
                     >
                  </v-list-item>
               </v-list>
            </v-col>
         </v-row>
      </base-container>
   </div>
</template>