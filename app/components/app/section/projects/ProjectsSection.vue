<script setup lang="ts">
const fileexplorerPluginDownloads = ref()
async function fetchFileexplorerPluginDownloads(): Promise<number> {
    const apiUrl = "https://mp-gateway.elgato.com/products/fcf4f735-1737-440c-a829-4e51578f58eb"
    const { download_count } = await $fetch<{ download_count: number }>(apiUrl)
    return download_count
}

onMounted(() => {
    fetchFileexplorerPluginDownloads()
        .then((downloads) => {
            fileexplorerPluginDownloads.value = downloads
        })
        .catch(() => {
            fileexplorerPluginDownloads.value = undefined
        })
})
</script>

<template>
    <AppSection
        id="projects"
        label="Featured Work"
        title="Engineered around real-world utility"
    >
        <div class="flex flex-col items-center gap-32">
            <AppSectionProjectsProject
                title="File Explorer Plugin for Elgato Stream Deck"
                description="An open-source TypeScript plugin that turns Stream Deck hardware keys into an interactive file browser. Enables users to navigate folder structures, generate dynamic image previews, launch files, and execute custom shell scripts without leaving their workflow. Reached nearly 20,000 downloads and was featured in Elgato's worldwide newsletter."
                image-dir-path="/imgs/projects/streamdeck-fileexplorer"
                :images-count="5"
                :tags="[
                    { name: `${fileexplorerPluginDownloads || 'Nearly 20,000'} Downloads`, icon: 'lucide:download' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'Stream Deck SDK', icon: 'simple-icons:elgato' },
                    { name: 'Open Source', icon: 'lucide:code' },
                ]"
                project-url="https://marketplace.elgato.com/product/fileexplorer-fcf4f735-1737-440c-a829-4e51578f58eb"
                project-url-label="Elgato Marketplace"
                github-url="https://github.com/arthur-paucke/streamdeck-fileexplorer"
            />

            <AppSectionProjectsProject
                title="lgx.art - Creator Graphics Portfolio"
                description="A motion-rich portfolio and commission website for a Minecraft and YouTube graphics designer. Built with Nuxt, Vue, TypeScript, Nuxt Content, Zod, and UnoCSS, it combines data-driven portfolio galleries, before-and-after artwork reveals, live YouTube social proof, partner integrations, and validated contact workflows."
                image-dir-path="/imgs/projects/lgx-art"
                :images-count="11"
                project-url="https://lgx.art"
                project-url-label="Visit lgx.art"
                github-url="https://github.com/arthur-paucke/Lgx_Website"
                :tags="[
                    { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'GSAP', icon: 'simple-icons:greensock' },
                ]"
            />

            <AppSectionProjectsProject
                title="Team Array - 3D Car Reveal & Animation"
                description="Complete 3D animation and rendering pipeline produced for Team Array, which won 2nd Place at the STEM Racing World Finals 2024. Handled end-to-end 3D production from texturing and realistic studio lighting in Blender to camera animation and final color grading in DaVinci Resolve. The animation served as the visual centerpiece for the team's enterprise and marketing presentations."
                image-dir-path="/imgs/projects/team-array-3d-car-reveal"
                :images-count="5"
                project-url="https://www.youtube.com/watch?v=s1c9Lhq3K7Y"
                project-url-label="Watch on YouTube"
                project-icon="simple-icons:youtube"
                :tags="[
                    { name: '2nd Place World Finals', icon: 'lucide:trophy' },
                    { name: 'Blender 3D', icon: 'logos:blender' },
                    { name: 'DaVinci Resolve', icon: 'simple-icons:davinciresolve' },
                ]"
            />

            <AppSectionProjectsProject
                title="Studiolution - Inactive Clients Retention Tool"
                description="A custom client-retention tool developed for salons using Studiolution. Combines a Python backend analyzing appointment records with a Vue.js / WXT browser extension that integrates directly into the salon's daily web workflow. Automatically flags clients overdue for appointments and enables staff to trigger re-engagement workflows and gift card incentives with a single click."
                image-dir-path="/imgs/projects/studiolution-addon"
                :images-count="6"
                :tags="[
                    { name: 'Client Tool', icon: 'lucide:briefcase' },
                    { name: 'Python', icon: 'logos:python' },
                    { name: 'Vue.js', icon: 'logos:vue' },
                    { name: 'WXT Extension', icon: 'lucide:blocks' },
                    { name: 'SQLite', icon: 'lucide:database' },
                ]"
            />

            <AppSectionProjectsProject
                title="SmashMC - Community Platform & Infrastructure"
                description="Full-stack web platform and backend infrastructure for an active gaming community with thousands of players. Built with Nuxt and TypeScript featuring real-time player leaderboards, dynamic statistics, PocketBase CMS integration, and interactive 3D elements rendered with Three.js. Supported by custom concurrency-safe game plugins and backend services developed in Java."
                image-dir-path="/imgs/projects/smashmc-website"
                :images-count="11"
                :tags="[
                    { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'PocketBase', icon: 'logos:pocket-base' },
                    { name: 'Three.js', icon: 'simple-icons:threedotjs' },
                    { name: 'Java Backend', icon: 'logos:java' },
                ]"
                github-url="https://github.com/SmashMCeu/website"
                project-url="https://smashmc.eu"
                :other-link="{ label: 'Beta Site', url: 'https://beta.smashmc.eu', external: true }"
            />
        </div>
    </AppSection>
</template>
