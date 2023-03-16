<template>
    <div>
        <v-toolbar
            color="transparent"
        >
            <v-toolbar-items class="ml-auto mr-6">
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
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";
    const router = useRouter();
    const options = [
        { text: "Home", path: "/" },
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
