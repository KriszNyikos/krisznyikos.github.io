<script setup lang="ts">
import type { CvSkillCategory } from '@/types'
import { SkillCategoryVariant } from '@/constants'

const { category } = defineProps<{
  category: CvSkillCategory
}>()
</script>

<template>
  <UBadge :variant="SkillCategoryVariant[category]" />
</template>
