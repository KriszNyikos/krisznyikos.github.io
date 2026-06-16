<script setup lang="ts">
import type { CvContent } from '@/types'

const { skills } = defineProps<{
  skills: CvContent['skills']
}>()
</script>

<template>
  <h2 class="text-2xl font-bold mb-4">
    Skills
  </h2>
  <ul class="list-disc list-inside">
    <li
      v-for="(skill, index) in skills"
      :key="index"
      class="flex gap-2"
    >
      <span>{{ skill.name }}</span> <CVSkillCategoryBadge
        v-if="skill.category"
        :category="skill.category"
      /> <CVSkillLevelBadge
        v-if="skill.level"
        :level="skill.level"
      />
    </li>
  </ul>
</template>
