<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Curriculum Vitae'
  }
})
</script>

<template>
  <UHeader :title="props.title">
    <template #right>
      <UColorModeButton />
      <ULink to="/">EN</ULink>
      <USeparator orientation="vertical" />
      <ULink to="/hu">HU</ULink>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/ui"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/ui"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
      />
    </template>
  </UHeader>
</template>
