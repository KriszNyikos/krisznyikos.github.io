<script setup lang="ts">
import type { CvContent } from '@/types'

const { education } = defineProps<{
  education: CvContent['education']
}>()
</script>

<template>
  <h2 class="text-lg font-bold mb-2 border-b border-gray-200 pb-1">
    Education
  </h2>
  <div v-if="Array.isArray(education)">
    <div
      v-for="(edu, idx) in education"
      :key="idx"
      class="mb-3"
    >
      <h3 class="font-bold">
        {{ edu.institution }}
      </h3>
      <div class="text-sm">
        {{ edu.degree }} — {{ edu.fieldOfStudy }}
      </div>
      <div class="text-sm text-gray-500">
        {{ edu.startDate ? edu.startDate + ' — ' : '' }}{{ edu.endDate }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
