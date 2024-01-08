<template>
    <div>
        <ProjectCard
            v-for="(project, i) in projects"
            :key="i"
            :project="project"
        />
    </div>
</template>

<script setup>
    import ProjectCard from "@/components/ProjectCard.vue";
    const projects = [
        {
            about: "Little project for learning about Vue 3... and maybe flex about my flags knowledge.",
            description: "Test your knowledge of countries flags",
            gitHub: "https://github.com/HumbertoAxl/flag-guesser",
            image: "/assets/images/projects/flag-guesser.jpg",
            link: "https://flags.humbertoaxl.dev/",
            name: "Flag Guesser",
            year: "2022",
        },
        {
            about: "Made for helping me learn React and get to know more recipes.",
            description: "Thousands of easy and delicious meals!",
            gitHub: "https://github.com/HumbertoAxl/flag-guesser",
            image: "/assets/images/projects/foodelicious.png",
            link: "https://flag-guesser.netlify.app/",
            name: "Foodelicious",
            year: "2023",
        },
    ];
</script>
