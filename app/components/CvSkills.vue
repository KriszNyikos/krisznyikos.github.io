<script setup lang="ts">
import type { CvContent } from '@/types'

const { skills, title } = defineProps<{
  skills: CvContent['skills']
  title: string
}>()

const mappedSkills = mapSkillsToCategories(skills)
</script>

<template>
  <h2 class="text-lg font-bold border-b border-gray-200 pb-1">
    {{ title }}
  </h2>
  <div class="flex flex-col gap-2 text-md">
    <div
      v-for="([category, items], categoryIndex) in Object.entries(mappedSkills)"
      :key="categoryIndex"
      class="flex flex-col gap-2 justify-between items-start"
    >
      <div class="font-bold">
        {{ category }}
      </div>
      <ul class="list-none list-inside flex flex-col gap-1 w-full">
        <li
          v-for="(skill, skillIndex) in items"
          :key="skillIndex"
          class="flex gap-2 justify-between w-full items-center"
        >
          <span class="min-w-0 truncate">{{ skill.name }}</span>
          <CVSkillLevelBadge
            v-if="skill.level"
            :level="skill.level"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
