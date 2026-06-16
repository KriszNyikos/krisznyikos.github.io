<script setup lang="ts">
import type { CvSkillsLevel } from '@/types'
import { SkillLevelVariant } from '@/constants'

const { level } = defineProps<{
  level: CvSkillsLevel
}>()
</script>

<template>
  <UBadge :variant="SkillLevelVariant[level]" />
</template>
