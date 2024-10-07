<script setup lang="ts">
import type { Photo } from '@/types/gallery.type';
import { ref, defineAsyncComponent } from 'vue';
import ImageCard from './ImageCard.vue';
defineProps<{
  data: Photo[] | null
}>()
const selectedImage = ref<Photo | null>(null);
const ImageModal = defineAsyncComponent(() => import('./ImageModal.vue'));

function openModal(imageData: Photo) {
  selectedImage.value = imageData;
}

function closeModal() {
  selectedImage.value = null;
}
</script>

<template>
  <div class="gallery">
    <ImageCard v-for="item in data" :imageData="item" key="item.id" @openModal="openModal" />
  </div>

  <ImageModal v-if="selectedImage" :imageData="selectedImage" :closeModal="closeModal" />
</template>