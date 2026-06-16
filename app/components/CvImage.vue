<script setup lang="ts">
import profileImage from '@/assets/images/profile_image.jpg'
</script>

<template>
  <img
    :src="profileImage"
    alt="Profile Image"
    class="w-32 h-32 rounded-full object-cover mx-auto mb-4"
  >
</template>
