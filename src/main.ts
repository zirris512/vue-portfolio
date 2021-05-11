import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleDown,
    faAngleUp,
    faBars,
    faExternalLinkAlt,
    faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./index.css";

library.add(faAngleDown, faAngleUp, faLinkedin, faGithub, faBars, faExternalLinkAlt, faEllipsisV);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
