<script setup lang="ts">
import type { Photo } from '@/types/gallery.type';
defineProps<{
  imageData: Photo,
  closeModal: () => void
}>()
</script>

<template>
  <div v-if="imageData" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">&times;</button>
      <img :src="imageData.urls.regular" alt={{imageData.description}} width="500" height="500">
      <div class="image-details">
        <h2>{{ imageData.user.name }}</h2>
        <p>{{ imageData.location.name || 'Unknown Location' }}</p>
      </div>
    </div>
  </div>
</template>