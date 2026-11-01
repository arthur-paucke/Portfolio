<template>
    <AppSection
        id="experience"
        label="Background & Path"
        title="Practical engineering, human-centered systems, and community"
    >
        <div class="text-muted-foreground space-y-3 max-w-lg">
            <p>
                Human-Computer Interaction student at Universität Hamburg and freelance developer. Combining full-stack engineering with user-centered design to build software that is accessible, fast, and eliminates friction.
            </p>
            <p>
                For a complete overview of my work, academic achievements, and qualifications, you can download my CV:
            </p>
            <UiButton as-child>
                <NuxtLink
                    to="/files/CV_ArthurPaucke.pdf"
                    target="_blank"
                    external
                >
                    <Icon name="lucide:download" />
                    Download CV
                </NuxtLink>
            </UiButton>
        </div>
        <AppSectionExperienceTimeline class="text-left mt-12" />
    </AppSection>
</template>
