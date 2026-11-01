<script setup lang="ts">
defineOgImageComponent("default")
useSeoMeta({
    description: "Arthur Paucke — Human-Computer Interaction student and developer in Hamburg, Germany. Building responsive web applications, physical device extensions, and practical software tools.",
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
