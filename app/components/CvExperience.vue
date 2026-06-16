<script setup lang="ts">
import type { CvContent } from '@/types'

const { experience } = defineProps<{
  experience: CvContent['experience']
}>()
</script>

<template>
  <h2 class="text-lg font-bold mb-2 border-b border-gray-200 pb-1">
    Professional Experience
  </h2>
  <div v-if="Array.isArray(experience)">
    <article
      v-for="(job, idx) in experience"
      :key="idx"
      class="mb-4"
    >
      <h3 class="font-bold">
        {{ job.position }} — <span class="font-normal">{{ job.company }}</span>
      </h3>
      <div class="text-sm text-gray-500">
        {{ job.startDate }} — {{ job.endDate }}
      </div>
      <p class="my-1">
        {{ job.description }}
      </p>
      <div
        v-if="job.technologies && job.technologies.length"
        class="text-sm text-gray-700"
      >
        Technologies: {{ job.technologies.join(', ') }}
      </div>
    </article>
  </div>
</template>

<style scoped>

</style>
