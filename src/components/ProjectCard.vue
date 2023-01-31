<template>
    <v-card
        :loading="loading"
        class="mx-auto my-12"
        :elevation="7"
        max-width="374"
    >
        <template #progress>
            <v-progress-linear
                color="purple"
                height="10"
                indeterminate
            />
        </template>
        <v-img
            height="250"
            :src="project.image"
        />
        <v-card-title>{{ project.name }}</v-card-title>
        <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                {{ project.year }}
            </v-row>
            <div class="my-4 text-subtitle-2 font-italic">
                {{ project.description }}
            </div>
            <div>
                {{ project.about }}
            </div>
        </v-card-text>
        <v-divider class="mx-4" />
        <v-card-actions>
            <v-btn
                prepend-icon="mdi-github"
                variant="text"
                :href="project.gitHub"
                target="_blank"
            >
                GitHub
            </v-btn>
            <v-btn
                class="ml-auto"
                :href="project.link"
                target="_blank"
                prepend-icon="mdi-open-in-new"
                variant="text"
            >
                Access
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
    import { ref } from "vue";
    
    let loading = ref(false);
    const props = defineProps({
        project: {
            type: Object,
            required: true,
        },
    });

    const project = ref(props.project);
</script>
