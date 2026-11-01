<script setup lang="ts">
useSeoMeta({
    title: "Java Repositories & Software Tools",
    description: "A selection of Java applications, server plugins, client modifications, network proxies, and experimental programming tools.",
})

const repos: Array<{ title: string, description: string, githubUrl?: string, private: boolean }> = [
    {
        title: "Clan System (SmashMC)",
        description: "Quarkus, Quarkus Hibernate, Spigot, BungeeCord. A complex clan management plugin for the SmashMC Minecraft server network. Quarkus-based backend with a Spigot plugin frontend, featuring clan creation, invitations, roles, permissions, chat integration, and much more.",
        private: true,
    },
    {
        title: "Dynamic Inventory Library (SmashMC)",
        description: "An abstract inventory management library for Spigot plugins, simplifying dynamic inventories with pagination, custom actions, and concurrency support.",
        private: true,
    },
    {
        title: "Bonussystem Plugin",
        description: "A plugin for buying and selling in-game items with customizable layouts, in-game currency, and database-backed transaction tracking.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/MC-Plugin-BonusSystem",
    },
    {
        title: "A Modded Minecraft 1.8.9 Client (Experimental)",
        description: "An experimental Minecraft 1.8.9 client with quality-of-life improvements and a custom UI library built with OpenGL.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/ArtusClient-1.8.9",
    },
    {
        title: "A custom Proxy for Minecraft Servers (Experimental)",
        description: "An experimental man-in-the-middle proxy for Minecraft servers that allows network traffic to be inspected and modified for educational purposes.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/MITMProxyMinecraft",
    },
    {
        title: "Advanced Hoppers Plugin",
        description: "A Spigot plugin that enhances the functionality of hoppers in Minecraft, adding features like filtering and nearby items pickup.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/AdvancedHoppersPlugin",
    },
    {
        title: "Door Locks Plugin",
        description: "A Spigot plugin that lets players lock and unlock doors using GUIs and custom key items.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/DoorLocks",
    },
    {
        title: "Learning how to make a custom programming language",
        description: "An experimental programming language concept built from the ground up to explore language design, lexing, parsing, and interpretation.",
        private: false,
        githubUrl: "https://github.com/ArtusLama/OwnCodeLang",
    },
]
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="max-w-2xl mt-32 flex-col items-center text-center px-4">
            <UiButton
                as-child
                variant="link"
            >
                <NuxtLink
                    to="/"
                >
                    <Icon name="lucide:arrow-left" />
                    Back to Home
                </NuxtLink>
            </UiButton>

            <h1 class="mt-4 text-2xl font-bold">
                Java Repositories, Plugins & Software Tools
            </h1>

            <p class="mt-2 text-muted-foreground max-w-2xl">
                A selection of personal and community projects I've built in Java — ranging from game server plugins and concurrency libraries to client modifications with custom OpenGL GUIs, network proxies, and language interpreters.
            </p>

            <div class="mt-12 flex flex-col gap-4 w-full text-left">
                <McJavaReposItem
                    v-for="(repo, i) in repos"
                    :key="i"
                    :title="repo.title"
                    :description="repo.description"
                    :private="repo.private"
                    :github-url="repo.githubUrl"
                />
            </div>
        </div>
    </div>
</template>
