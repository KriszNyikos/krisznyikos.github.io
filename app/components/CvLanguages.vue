<script setup lang="ts">
import type { CvContent } from '@/types'

const { languages } = defineProps<{
  languages: CvContent['languages']
}>()
</script>

<template>
  <UContainer>
    <h2 class="text-2xl font-bold mb-4">
      Languages
    </h2>
    <ul class="list-disc list-inside">
      <li
        v-for="(language, index) in languages"
        :key="index"
      >
        {{ language }}
      </li>
    </ul>
  </UContainer>
</template>

<style scoped>

</style>
