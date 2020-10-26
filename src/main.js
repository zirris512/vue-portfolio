import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import BaseContainer from "./components/ui/BaseContainer.vue";

Vue.config.productionTip = false;

Vue.component("base-container", BaseContainer);

const app = new Vue({
   router,
   vuetify,
   render: (h) => h(App),
});

app.$mount("#app");
