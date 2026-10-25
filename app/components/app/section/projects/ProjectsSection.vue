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
        label="Showcase"
        title="Projects built around real problems"
    >
        <div class="flex flex-col items-center gap-32">
            <AppSectionProjectsProject
                title="File Explorer Plugin for Elgato Stream Deck"
                description="An open-source TypeScript plugin that makes file navigation possible directly from Stream Deck keys. It lets users browse folders, preview images, open directories, and run custom commands without leaving their workflow. The plugin has reached almost 20,000 downloads."
                image-dir-path="/imgs/projects/streamdeck-fileexplorer"
                :images-count="5"
                :tags="[
                    { name: `${fileexplorerPluginDownloads || '> 17000'} Downloads`, icon: 'lucide:download' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'StreamDeck SDK', icon: 'simple-icons:elgato' },
                ]"
                project-url="https://marketplace.elgato.com/product/fileexplorer-fcf4f735-1737-440c-a829-4e51578f58eb"
                github-url="https://github.com/ArtusLama/streamdeck-fileexplorer"
            />

            <AppSectionProjectsProject
                title="List of Java repositories - mostly Minecraft plugins"
                description="A selection of Java plugins and tools I developed over more than two years as part of a volunteer Minecraft server development team. I implemented features and fixed bugs based directly on community feedback. Much of my work for SmashMC is private, but several projects are available here."
                image-dir-path="/imgs/projects/mc-java-plugins"
                :images-count="1"
                :tags="[
                    { name: 'Java', icon: 'logos:java' },
                    { name: 'Spigot', icon: 'simple-icons:spigotmc' },
                    { name: 'Docker', icon: 'logos:docker-icon' },
                    { name: 'Database', icon: 'lucide:database' },
                ]"
                :other-link="{ label: 'View Plugins', url: '/mc-java-repos', external: false }"
            />

            <AppSectionProjectsProject
                title="SmashMC Website"
                description="A responsive website for the SmashMC Minecraft server network, built with Nuxt.js and TypeScript. It uses PocketBase for content management and Three.js for interactive 3D elements. The current redesign focuses on performance, accessibility, and a clearer user experience."
                image-dir-path="/imgs/projects/smashmc-website"
                :images-count="11"
                :tags="[
                    { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'PocketBase CMS', icon: 'logos:pocket-base' },
                    { name: 'Three.js', icon: 'simple-icons:threedotjs' },
                ]"
                github-url="https://github.com/SmashMCeu/website"
                project-url="https://smashmc.eu"
                :other-link="{ label: 'Beta Site', url: 'https://beta.smashmc.eu', external: true }"
            />

            <AppSectionProjectsProject
                title="Interactive Map to manage Areas for Rescue Stations"
                description="A specialized interactive map for rescue stations. It helps users mark and color-code service areas, highlight important locations, and attach critical information to each marker."
                image-dir-path="/imgs/projects/wachbereiche-map"
                :images-count="5"
                :tags="[
                    { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
                    { name: 'TypeScript', icon: 'logos:typescript-icon' },
                    { name: 'Leaflet.js', icon: 'simple-icons:leaflet' },
                ]"
                github-url="https://github.com/ArtusLama/WachbereicheMap"
                project-url="https://artuslama.github.io/WachbereicheMap"
            />

            <AppSectionProjectsProject
                title="Studiolution - Inactive Clients Management Tool"
                description="A browser extension and Python backend that detects inactive clients in Studiolution, helping salons re-engage them with targeted campaigns. It highlights clients who have missed their usual appointment window and lets staff send a gift card with one click."
                image-dir-path="/imgs/projects/studiolution-addon"
                :images-count="6"
                :tags="[
                    { name: 'Python', icon: 'logos:python' },
                    { name: 'SQLite', icon: 'lucide:database' },
                    { name: 'WXT', icon: 'lucide:blocks' },
                    { name: 'Vue.js', icon: 'logos:vue' },
                ]"
                github-url="https://github.com/ArtusLama/WachbereicheMap"
                project-url="https://artuslama.github.io/WachbereicheMap"
            />
        </div>
    </AppSection>
</template>
