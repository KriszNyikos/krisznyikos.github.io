<script setup>
import { en } from '../data'

definePageMeta({
  title: 'Krisztian Nyikos — CV',
  meta: [
    { name: 'description', content: en.summary || 'Krisztian Nyikos CV — English' },
    { property: 'og:title', content: 'Krisztian Nyikos — CV' },
    { property: 'og:description', content: en.summary || 'Krisztian Nyikos CV — English' }
  ]
})
</script>

<template>
  <CvTemplate :content="en" />
</template>
