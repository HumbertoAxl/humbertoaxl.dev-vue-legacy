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
.v-application__wrap {
  height: 95vh !important;
}
</style>
