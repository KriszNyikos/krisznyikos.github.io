<script setup lang="ts">
import type { CvContent } from '@/types'
import isHuRoute from '@/composables'
import { TitleTranslations } from '@/constants'

const { content } = defineProps<{ content: CvContent }>()
const { isHu } = isHuRoute()
</script>

<template>
  <div class="max-w-[1100px] mx-auto p-4">
    <CvHeader
      :name="content.familyName + ' ' + content.givenName"
      :job-title="content.jobTitle"
      :contact="content.contact"
    />
    <CvAbout

      :about="content.about"
      :contact="content.contact"
      class="mt-4"
    />
    <CvSkills
      :skills="content.skills"
      :title="isHu ? TitleTranslations.hu.skills : TitleTranslations.en.skills"
      class="mt-4"
    />

    <CvExperience
      :title="isHu ? TitleTranslations.hu.experience : TitleTranslations.en.experience"
      :experience="content.experience"
      class="mt-4"
    />
    <div class="mt-4 page-break-print">
      <CvEducation
        :title="isHu ? TitleTranslations.hu.education : TitleTranslations.en.education"
        :education="content.education"
      />
    </div>
  </div>
</template>
