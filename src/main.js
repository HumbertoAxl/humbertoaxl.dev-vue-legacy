import { createApp } from "vue";
import App from "@/App.vue";
import HomePage from "@/views/HomePage.vue";
import ProjectsView from "@/views/ProjectsView.vue";
// import PlaceHolder from "@/components/PlaceHolder.vue";
import AboutMe from "@/components/AboutMe.vue";
import ContactMe from "@/components/ContactMe.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const defaultTheme = {
    dark: true,
    colors: {
        "background": "#191a1d",
        "surface": "#1f2d40",
        "primary": "#64B5F6",
        "primary-darken-1": "#467EAC",
        "secondary": "#B5F664",
        "secondary-darken-1": "#91f664",
        "error": "#B00020",
        "info": "#2196F3",
        "success": "#4CAF50",
        "warning": "#FB8C00",
    }
};

const vuetify = createVuetify({
    components,
    theme: {
        defaultTheme: "defaultTheme",
        themes: {
            defaultTheme
        }
    },
    directives,
});

const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutMe },
    { path: "/projects", component: ProjectsView },
    { path: "/contact", component: ContactMe },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

createApp(App).use(router).use(vuetify).mount("#app");