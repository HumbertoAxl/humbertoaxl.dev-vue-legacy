<script setup>
    // import { useTheme } from 'vuetify'
    import TopBar from "@/components/TopBar.vue";
    // const theme = useTheme()
</script>

<template>
    <TopBar />
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<style>
html {
    /* font-family: "Montserrat" !important; */
}
.v-application__wrap {
  min-height: 40vh !important;
  overflow-y: hidden !important;
}
</style>
