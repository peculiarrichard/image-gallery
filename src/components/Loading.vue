<script setup lang="ts">
const items = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<template>
 <div class="loading">
    <div class="grid-item loading" v-for="item in items" :key="item">
        <div class="loading-image"></div>
        <div class="loading-text"></div>
        <div class="loading-text-p"></div>
    </div>
 </div>

</template>