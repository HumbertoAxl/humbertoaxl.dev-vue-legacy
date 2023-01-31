<template>
    <ProjectCard
        v-for="project, i in projects"
        :key="i"
        :project="project[i]"
    />
</template>

<script setup>
    import ProjectCard from "@/components/ProjectCard.vue";
    const projects = [
        [
            {
                about: "Little project I have created for learning about Vue 3.",
                description: "Test your knowledge of countries flags",
                gitHub: "https://github.com/HumbertoAxl/flag-guesser",
                image: "/assets/images/projects/flag-guesser.jpg",
                link: "https://flag-guesser.netlify.app/",
                name: "Flag Guesser",
                year: "2022",
            },
        ]
    ];
</script>
