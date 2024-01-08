import { createApp } from "vue";
import App from "@/App.vue";
import HomePage from "@/pages/HomePage.vue";
import ProjectsView from "@/pages/ProjectsView.vue";
import ResumePage from "@/components/ResumePage.vue";
import ContactMe from "@/components/ContactMe.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const defaultTheme = {
    dark: true,
    primaryText: "#ffffff",
    colors: {
        "background": "#ffffff",
        "surface": "#ffffff",
        "primary": "#ffffff",
        "secondary": "#B5F664",
        "error": "#B00020",
        "info": "#2196F3",
        "success": "#4CAF50",
        "warning": "#FB8C00",
    },
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
    { path: "/resume", component: ResumePage },
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