<script setup lang="ts">
import type { CvSkillsLevel } from '@/types'
import { SkillLevelColor } from '@/constants'

const { level } = defineProps<{
  level: CvSkillsLevel
}>()
</script>

<template>
  <UBadge
    :color="SkillLevelColor[level]"
    variant="soft"
  >
    {{ level.toLowerCase() }}
  </UBadge>
</template>
