<script setup>
    // import { useTheme } from 'vuetify'
    import NavigationBar from "@/components/NavigationBar.vue";
    import Net from "vanta/dist/vanta.net.min";
    
    // const theme = useTheme()
    Net({
        el: "#app",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x141446,
        color: 0x7f7de3,
        points: 8.00,
        maxDistance: 17.00
    });
</script>
    
<template>
    <v-app>
        <v-main>
            <NavigationBar />
            <router-view />
        </v-main>
    </v-app>
</template>

<style>
.v-application__wrap {
    font-family: circular, 'segoe ui', sans-serif;
}

</style>
