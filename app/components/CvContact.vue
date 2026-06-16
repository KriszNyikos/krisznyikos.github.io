<script setup lang="ts">
import type { CvContent } from '@/types'

const { contact } = defineProps<{
  contact: CvContent['contact']
}>()
</script>

<template>
  <h2 class="text-lg font-bold mb-2 border-b border-gray-200 pb-1">
    Contact
  </h2>
  <ul class="list-none p-0 m-0 grid gap-1">
    <li>
      <strong>Email:</strong> <a
        class="text-blue-600 hover:underline"
        :href="`mailto:${contact.email}`"
      >{{ contact.email }}</a>
    </li>
    <li><strong>Phone:</strong> {{ contact.phone }}</li>
    <li><strong>Location:</strong> {{ contact.location }}</li>
    <li>
      <strong>LinkedIn:</strong> <a
        class="text-blue-600 hover:underline"
        :href="`https://${contact.linkedin}`"
        target="_blank"
        rel="noreferrer"
      >{{ contact.linkedin }}</a>
    </li>
    <li>
      <strong>Github:</strong> <a
        class="text-blue-600 hover:underline"
        :href="`https://${contact.github}`"
        target="_blank"
        rel="noreferrer"
      >{{ contact.github }}</a>
    </li>
  </ul>
</template>

<style scoped>

</style>
