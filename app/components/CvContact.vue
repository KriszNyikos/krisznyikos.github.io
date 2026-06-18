<script setup lang="ts">
import type { CvContent } from '@/types'

const { contact } = defineProps<{
  contact: CvContent['contact']
}>()
</script>

<template>
  <div class="flex flex-row gap-4 flex-wrap text-sm">
    <div
      class="flex flex-row gap-1"
    >
      <UIcon
        name="i-lucide-mail"
        class="size-5"
      /> {{ contact.email }}
    </div>

    <div
      class="flex flex-row gap-1"
    >
      <UIcon
        name="i-lucide-phone"
        class="size-5"
      /> {{ contact.phone }}
    </div>

    <div
      class="flex flex-row gap-1"
    >
      <UIcon
        name="i-lucide-map-pin"
        class="size-5"
      /> {{ contact.location }}
    </div>

    <div
      class="flex flex-row gap-1"
    />
  </div>
</template>
