<script setup>
import { hu } from '../data'

definePageMeta({
  title: 'Nyikos Krisztián — Önéletrajz',
  meta: [
    { name: 'description', content: hu.summary || 'Nyikos Krisztián önéletrajza' },
    { property: 'og:title', content: 'Nyikos Krisztián — Önéletrajz' },
    { property: 'og:description', content: hu.summary || 'Nyikos Krisztián önéletrajza' }
  ]
})
</script>

<template>
  <CvTemplate :content="hu" />
</template>
