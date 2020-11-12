import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import BaseContainer from "./components/ui/BaseContainer.vue";
import BaseTooltip from "./components/ui/BaseTooltip.vue";
import BaseButton from "./components/ui/BaseButton.vue";

Vue.config.productionTip = false;

Vue.component("base-container", BaseContainer);
Vue.component("base-tooltip", BaseTooltip);
Vue.component("base-button", BaseButton);

const app = new Vue({
   router,
   vuetify,
   render: (h) => h(App),
});

app.$mount("#app");
