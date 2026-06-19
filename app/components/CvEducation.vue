<script setup lang="ts">
import type { CvContent } from '@/types'

const { education } = defineProps<{
  education: CvContent['education']
  title: string
}>()
</script>

<template>
  <UContainer>
    <h2 class="text-md font-bold mb-2">
      {{ title }}
    </h2>
    <UCard
      v-if="Array.isArray(education)"
      class="drop-shadow-xl print:drop-shadow-none"
    >
      <div
        v-for="(edu, idx) in education"
        :key="idx"
        class="mb-3"
      >
        <h3 class="text-sm font-bold">
          {{ edu.institution }}
        </h3>
        <div class="text-sm">
          {{ edu.degree }} — {{ edu.fieldOfStudy }}
        </div>
        <div class="text-sm text-gray-500">
          {{ edu.startDate ? edu.startDate + ' — ' : '' }}{{ edu.endDate }}
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
