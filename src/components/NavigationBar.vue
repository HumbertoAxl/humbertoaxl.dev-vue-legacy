<template>
    <v-toolbar
        color="#0f0f33"
        title="Humberto Axl"
    >
        <v-toolbar-items class="ml-auto">
            <v-btn
                v-for="option in options"
                :key="option"
                :class="{ active: option.path === router.currentRoute.value.path }"
                :path="option.path"
                variant="text"
                @click.stop="navigateTo(option.path)"
            >
                {{ option.text }}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script setup>
    import { useRouter } from "vue-router";
    const router = useRouter();
    const options = [
        { text: "Home", path: "/" },
        { text: "Resume", path: "/resume" },
        { text: "Projects", path: "/projects" },
        { text: "Contact", path: "/contact" },
    ];

    function navigateTo(path) {
        router.push(path);
    }
</script>

<style scoped>

.v-toolbar {
    color: white;
}
.active {
    background-color: white;
    color: black;
    transition: 300ms linear;
}
</style>
