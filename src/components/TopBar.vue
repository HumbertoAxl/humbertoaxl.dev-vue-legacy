<template>
    <div class="d-flex justify-center">
        <v-toolbar
            elevation="2"
        >
            <v-toolbar-items>
                <v-btn
                    v-for="option in options"
                    :key="option"
                    :class="{active: option.path === router.currentRoute.value.path}"
                    :path="option.path"
                    variant="text"
                    @click.stop="navigateTo(option.path)"
                >
                    {{ option.text }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";
    const router = useRouter();
    const options = [
        { text: "Home", path: "/" },
        { text: "About", path: "/about" },
        { text: "Projects", path: "/projects" },
        { text: "Contact", path: "/contact" },
    ];

    function navigateTo(path) {
        router.push(path);
    }
</script>

<style scoped>
.active {
    background-color: white;
    color: black;
}
</style>
