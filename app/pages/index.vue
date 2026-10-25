<script setup lang="ts">
defineOgImageComponent("default")
useSeoMeta({
    description: "I'm Arthur Paucke, a Human-Computer Interaction student and developer based in Hamburg, Germany. I build accessible, intuitive software with modern web technologies, TypeScript, Java, and Python.",
})
</script>

<template>
    <div>
        <Navigation />
        <main
            class="space-y-32"
            aria-label="Main Content"
        >
            <AppHeroSection />
            <AppSectionExperienceSection />
            <AppSectionSkillsSection />
            <AppSectionProjectsSection />
            <AppSectionContactSection />
        </main>
    </div>
</template>
