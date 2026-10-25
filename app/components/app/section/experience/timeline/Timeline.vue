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
            date-from="Oct 2026"
            date-to="Oct 2029 (expected)"
            icon-path="/imgs/logos/experience/school.svg"
            title="B.Sc. Human-Computer Interaction"
            subtitle="University of Hamburg"
            location="Hamburg, Germany"
            description="I am studying Human-Computer Interaction to combine computer science with psychology and design. The degree gives me the opportunity to explore how people interact with technology and how digital products can be made more intuitive, accessible, and useful in everyday life. I am particularly interested in the relationship between technical implementation, user needs, and the social impact of software."
        />
        <AppSectionExperienceTimelineItem
            date-from="Aug 2018"
            date-to="Aug 2026"
            icon-path="/imgs/logos/experience/school.svg"
            title="Abitur (A-levels)"
            subtitle="Gymnasium Grootmoor"
            location="Hamburg, Germany"
            description="Graduated with an Abitur average of 1.3. In the Energy Engineering and Sustainability profile, I worked across mathematics, computer science, physics, geography, and philosophy. This interdisciplinary focus taught me to examine technical solutions not only from a scientific perspective, but also in terms of their environmental, social, and ethical consequences. I also completed several research papers and finished second in a Hamburg-wide school volleyball tournament."
        />
        <AppSectionExperienceTimelineItem
            date-from="Feb 2024"
            date-to="Jul 2025"
            icon-path="/imgs/logos/experience/math_tutor.svg"
            title="Mathematics Tutor"
            subtitle="Gymnasium Grootmoor"
            location="Hamburg, Germany"
            description="Provided regular, in-person mathematics support for up to three students at a time over one and a half years. I reviewed classroom material, worked through exercises interactively, and taught learning, exam, and problem-solving strategies. Because each student had a different level of prior knowledge, I adapted my explanations and teaching methods to make abstract concepts easier to understand. Together with another tutor, I also led a three-and-a-half-hour mathematics crash course for around 20 participants, presenting several topics, moderating questions, and guiding students through practice problems."
        />
        <AppSectionExperienceTimelineItem
            date-from="Jul 2024"
            date-to="Jul 2024"
            icon-path="/imgs/logos/experience/diakonie_hamburg.svg"
            title="Social Care Intern"
            subtitle="TAS Norderstedt (Diakonie Hamburg)"
            location="Norderstedt, Germany"
            description="Supported people experiencing homelessness and other difficult life circumstances in their daily routines. My responsibilities included helping with basic care, hygiene, and community activities, while contributing to a respectful and structured environment. I also gained insight into social counselling by observing and supporting communication with public authorities and the preparation of applications. The experience strengthened my understanding of how important accessible, empathetic support is when people are dealing with complex personal and administrative challenges."
        />
        <AppSectionExperienceTimelineItem
            date-from="Jun 2023"
            date-to="Jul 2023"
            icon-path="/imgs/logos/experience/mindmatters.svg"
            title="Web Development Intern"
            subtitle="Mindmatters"
            location="Hamburg, Germany"
            description="Worked on product development from the initial idea to a functional prototype in a hybrid, agile environment. I analysed the problem and target audience, designed interactive wireframes and user flows in Figma and Miro, and iteratively implemented the product as a full-stack web application using Nuxt.js, Supabase, and PostgreSQL. The internship taught me how closely product decisions, user experience, and technical implementation are connected, and gave me practical experience presenting and refining a solution based on feedback."
        />
    </div>
</template>
