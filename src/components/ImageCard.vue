<script setup lang="ts">
import type { Photo } from '@/types/gallery.type';
const props = defineProps<{
  imageData: Photo
}>()
const emit = defineEmits(['openModal']);

function handleClick() {
  emit('openModal', props.imageData);
}
</script>

<template>
  <div class="image-card" @click="handleClick">
    <img :src="imageData.urls.small" alt={{imageData.description}}>
    <h3>{{ imageData.user.name }}</h3>
    <p>{{ imageData.location.name || 'Unknown Location' }}</p>
  </div>
</template>