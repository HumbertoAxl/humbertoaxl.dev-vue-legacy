<script setup>
    // import { useTheme } from 'vuetify'
    import ToolBar from "@/components/ToolBar.vue";
    // const theme = useTheme()
</script>

<template>
    <v-app>
        <v-main class="main">
            <ToolBar />
            <router-view />
        </v-main>
    </v-app>
</template>

<style>
.main {
    background-image: url("../../public/assets/background.jpg");
    font-family: 'Cambria';
}

</style>
