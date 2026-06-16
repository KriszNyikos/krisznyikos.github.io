<script setup lang="ts">
import type { CvSkillCategory } from '@/types'
import { SkillCategoryColor } from '@/constants'

const { category } = defineProps<{
  category: CvSkillCategory
}>()
</script>

<template>
  <UBadge
    :color="SkillCategoryColor[category]"
    variant="subtle"
    size="sm"
    rounded="sm"
  >
    {{ category.toLowerCase() }}
  </UBadge>
</template>
