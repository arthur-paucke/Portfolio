<script setup lang="ts">
const techStack: Array<{
    category: "frontend" | "backend" | "design" | "other"
    title: string
    description: string
    logoPath?: string
    icon?: string
    color: string
    link: string
}> = [
    {
        category: "frontend",
        title: "Nuxt.js",
        description: "Full-Stack Vue Framework",
        logoPath: "/imgs/logos/tech/nuxt.svg",
        color: "#00c58e26",
        link: "https://nuxt.com/",
    },
    {
        category: "frontend",
        title: "Vue.js",
        description: "Reactive UI Components",
        logoPath: "/imgs/logos/tech/vue.svg",
        color: "#41b88326",
        link: "https://vuejs.org/",
    },
    {
        category: "frontend",
        title: "TypeScript",
        description: "Type-Safe Application Architecture",
        logoPath: "/imgs/logos/tech/typescript.svg",
        color: "#3178c626",
        link: "https://www.typescriptlang.org/",
    },
    {
        category: "frontend",
        title: "UnoCSS",
        description: "On-Demand Atomic CSS Engine",
        icon: "logos:unocss",
        color: "#33333326",
        link: "https://unocss.dev/",
    },
    {
        category: "frontend",
        title: "TailwindCSS",
        description: "Utility-First Styling & Design Systems",
        logoPath: "/imgs/logos/tech/tailwindcss.svg",
        color: "#38bdf826",
        link: "https://tailwindcss.com/",
    },
    {
        category: "backend",
        title: "Java",
        description: "Backend Logic & Concurrent Systems",
        logoPath: "/imgs/logos/tech/java.svg",
        color: "#f8981c26",
        link: "https://www.java.com/",
    },
    {
        category: "backend",
        title: "Python",
        description: "Automation, Scripting & Backend APIs",
        logoPath: "/imgs/logos/tech/python.svg",
        color: "#3776ab26",
        link: "https://www.python.org/",
    },
    {
        category: "backend",
        title: "PocketBase",
        description: "Open-Source Backend & Authentication",
        icon: "logos:pocket-base",
        color: "#b8db5726",
        link: "https://pocketbase.io/",
    },
    {
        category: "backend",
        title: "Supabase",
        description: "Backend-as-a-Service & Realtime APIs",
        icon: "logos:supabase-icon",
        color: "#3ecf8e26",
        link: "https://supabase.com/",
    },
    {
        category: "backend",
        title: "PostgreSQL",
        description: "Relational Database Architecture",
        icon: "logos:postgresql",
        color: "#4169e126",
        link: "https://www.postgresql.org/",
    },
    {
        category: "design",
        title: "Figma",
        description: "UI/UX Prototyping & Design Systems",
        logoPath: "/imgs/logos/tech/figma.svg",
        color: "#f24e1e26",
        link: "https://www.figma.com/",
    },
    {
        category: "design",
        title: "Blender",
        description: "3D Modeling, Texturing & Animation",
        logoPath: "/imgs/logos/tech/blender.svg",
        color: "#f5792a26",
        link: "https://www.blender.org/",
    },
    {
        category: "design",
        title: "DaVinci Resolve",
        description: "Video Editing & Grading",
        logoPath: "/imgs/logos/tech/DaVinci_Resolve_Studio.png",
        color: "#4169e126",
        link: "https://www.blackmagicdesign.com/products/davinciresolve",
    },
    {
        category: "design",
        title: "Miro",
        description: "Collaborative Ideation & User Flows",
        icon: "logos:miro-icon",
        color: "#ffd02f26",
        link: "https://miro.com/",
    },
    {
        category: "other",
        title: "Three.js",
        description: "Interactive 3D Web Experiences",
        icon: "simple-icons:threedotjs",
        color: "#ffffff26",
        link: "https://threejs.org/",
    },
    {
        category: "other",
        title: "Docker",
        description: "Containerization & Deployment",
        logoPath: "/imgs/logos/tech/docker.svg",
        color: "#2496ed26",
        link: "https://www.docker.com/",
    },
    {
        category: "other",
        title: "Git",
        description: "Distributed Version Control",
        logoPath: "/imgs/logos/tech/git.svg",
        color: "#f34f2926",
        link: "https://git-scm.com/",
    },
    {
        category: "other",
        title: "GitHub",
        description: "Code Hosting, CI/CD & Open Source",
        logoPath: "/imgs/logos/tech/github.svg",
        color: "#f0f0f026",
        link: "https://github.com/",
    },
]
</script>

<template>
    <AppSection
        id="skills"
        label="Technical Toolkit"
        title="Tools & Technologies"
    >
        <p class="max-w-xl text-muted-foreground mb-6">
            <Icon
                name="lucide:wrench"
                :size="18"
                class="mr-1 -mb-0.5 text-primary"
            />
            The core tools and technologies I use to build performant web applications, physical device integrations, and 3D experiences.
        </p>
        <AppSectionSkillsAccordion :tech-stack="techStack" />
    </AppSection>
</template>
