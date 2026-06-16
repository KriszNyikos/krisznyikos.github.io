<script setup lang="ts">
import type { CvContent } from '@/types'

const { skills } = defineProps<{
  skills: CvContent['skills']
}>()
</script>

<template>
  <UContainer>
    <h2 class="text-2xl font-bold mb-4">
      Skills
    </h2>
    <ul class="list-disc list-inside">
      <li
        v-for="(skill, index) in skills"
        :key="index"
      >
        {{ skill }}
      </li>
    </ul>
  </UContainer>
</template>
