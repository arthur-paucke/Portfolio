<script setup lang="ts">
const progressBar = useTemplateRef<HTMLElement>("progressBar")
const timelineContainer = useTemplateRef<HTMLElement>("timelineContainer")

onMounted(() => {
    const gsap = useGSAP()
    if (!progressBar.value || !timelineContainer.value) return

    gsap.to(progressBar.value, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: timelineContainer.value,
            start: "top center",
            end: "bottom center",
            scrub: 1,
        },
    })

    // Dot Animation is in the TimelineItem Component
})
</script>

<template>
    <div
        ref="timelineContainer"
        class="relative"
    >
        <div class="absolute left-0 md:left-36 w-1 top-0 bottom-0 pointer-events-none">
            <div class="bg-muted absolute w-full top-0 h-full" />
            <div
                ref="progressBar"
                class="bg-white absolute w-full top-0 h-0"
            />
        </div>

        <AppSectionExperienceTimelineItem
            date-from="Jun 2026"
            date-to="Present"
            icon-name="lucide:briefcase"
            title="Freelance Software & Web Developer"
            subtitle="Arthur Paucke (Self-Employed)"
            location="Hamburg, Germany"
            description="Designing and developing custom web applications, workflow automation tools, and software extensions tailored to specific client needs. End-to-end execution: problem discovery, interactive interface design in Figma, and full-stack development with modern Vue/Nuxt and TypeScript architectures."
        />
        <AppSectionExperienceTimelineItem
            date-from="Oct 2026"
            date-to="Oct 2029 (expected)"
            icon-path="/imgs/logos/experience/school.svg"
            title="B.Sc. Human-Computer Interaction"
            subtitle="Universität Hamburg"
            location="Hamburg, Germany"
            description="Interdisciplinary degree combining computer science with psychology and human-centered design. Core focus on usability engineering, accessibility, empirical interface evaluation, and creating digital experiences that eliminate user friction."
        />
        <AppSectionExperienceTimelineItem
            date-from="Dec 2023"
            date-to="Feb 2026"
            icon-name="lucide:users"
            title="Volunteer Software Engineer"
            subtitle="SmashMC"
            remote
            description="Over two years collaborating in a developer team for an active gaming community with thousands of players. Engineered the modern interactive website with Nuxt, TypeScript, Three.js, and PocketBase. Developed server-side game logic, concurrency-safe plugins, and backend services in Java."
        />
        <AppSectionExperienceTimelineItem
            date-from="Feb 2024"
            date-to="Jul 2025"
            icon-path="/imgs/logos/experience/math_tutor.svg"
            title="Mathematics Tutor"
            subtitle="Gymnasium Grootmoor"
            location="Hamburg, Germany"
            description="Provided structured math tutoring and exam preparation for students in grades 5–10 in small groups. Co-organized and co-led an intensive 3.5-hour mathematics crash course for 20 students, focusing on translating abstract concepts into intuitive, step-by-step problem-solving techniques."
        />
        <AppSectionExperienceTimelineItem
            date-from="Jul 2024"
            date-to="Jul 2024"
            icon-path="/imgs/logos/experience/diakonie_hamburg.svg"
            title="Social Care Intern"
            subtitle="TAS Norderstedt (Diakonie Hamburg)"
            location="Norderstedt, Germany"
            description="Supported unhoused and vulnerable individuals with essential daily care, community activities, and social service navigation. A grounding experience highlighting the vital importance of empathetic communication and accessible, friction-free systems."
        />
        <AppSectionExperienceTimelineItem
            date-from="Jun 2023"
            date-to="Jul 2023"
            icon-path="/imgs/logos/experience/mindmatters.svg"
            title="Web Development Intern"
            subtitle="Mindmatters"
            location="Hamburg, Germany"
            description="Conceived and prototyped a dedicated volleyball training web app in an agile agency setup. Conducted problem and audience analysis, designed user flows and wireframes in Figma and Miro, and iteratively developed a full-stack prototype using Nuxt.js, Supabase, and PostgreSQL."
        />
        <AppSectionExperienceTimelineItem
            date-from="Aug 2018"
            date-to="Jul 2026"
            icon-path="/imgs/logos/experience/school.svg"
            title="Abitur (A-levels)"
            subtitle="Gymnasium Grootmoor"
            location="Hamburg, Germany"
            description="Graduated with a 1.3 GPA in the Energy Engineering & Sustainability profile (Physics, Geography, Philosophy, Math). Completed research papers on energy storage and aerodynamic resistance. Finished all upper-school semesters and final exam in Computer Science with top grades (14–15 points)."
        />
    </div>
</template>
