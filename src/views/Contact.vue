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
                     <v-btn text href="https://github.com/zirris512"
                        >GitHub</v-btn
                     >
                  </v-list-item>
                  <v-list-item>
                     <v-btn
                        text
                        href="https://www.linkedin.com/in/brentleigh-edwards-0b29a3140/"
                     >
                        LinkedIn
                     </v-btn>
                  </v-list-item>
                  <v-list-item>
                     <v-btn text href="mailto:brentedwards512@gmail.com"
                        >Email</v-btn
                     >
                  </v-list-item>
               </v-list>
            </v-col>
         </v-row>
      </base-container>
   </div>
</template>