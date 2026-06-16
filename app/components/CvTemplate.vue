<script setup lang="ts">
import type { CvContent } from '@/types'

const { content } = defineProps<{ content: CvContent }>()
</script>

<template>
  <div class="max-w-[1100px] mx-auto p-4">
    <CvHeader :title="content.familyName + ' ' + content.givenName" />

    <section class="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-5 items-start">
      <aside class="flex flex-col gap-4">
        <CvAbout :about="content.about" />
        <CvSkills :skills="content.skills" />
        <CvLanguages :languages="content.languages" />
      </aside>

      <main class="flex flex-col gap-4">
        <CvContact :contact="content.contact" />
        <CvExperience :experience="content.experience" />
        <CvEducation :education="content.education" />
      </main>
    </section>
  </div>
</template>
