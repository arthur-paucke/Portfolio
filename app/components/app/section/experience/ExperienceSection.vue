<template>
    <AppSection
        id="experience"
        label="Education, Work & Community"
        title="Building at the intersection of people and technology"
    >
        <div class="text-muted-foreground space-y-2 max-w-md">
            <p>I'm studying Human-Computer Interaction at the University of Hamburg to combine solid computer science with psychology and design.</p>
            <p>For more details about my background and experience, you can download my CV here:</p>
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
