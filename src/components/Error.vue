<script setup lang="ts">
defineProps<{ error: string }>();
</script>

<template>
  <div class="error">
    <p>{{ error }}</p>
  </div>
</template>