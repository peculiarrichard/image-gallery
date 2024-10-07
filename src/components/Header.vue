<script setup lang="ts">
import { ref, watch } from 'vue';
defineProps<{ isLoading: boolean, query: string }>();

const emit = defineEmits<{
  (e: 'onSearch', searchTerm: string): void;
}>();

const searchTerm = ref('');
const hasSearchResultsLoaded = ref(false);
const submitSearch = () => {
  if (searchTerm.value) {
    emit('onSearch', searchTerm.value);
    hasSearchResultsLoaded.value = true;
  }
};

watch(() => searchTerm.value, (newVal) => {
  if (!newVal) {
    hasSearchResultsLoaded.value = false;
  }
});

</script>

<template>
  <div class="header">
    <h3 v-if="isLoading">Searching for <span>"{{ query }}"</span></h3>
    <h3 v-else-if="hasSearchResultsLoaded">Search results for <span>"{{ searchTerm }}"</span></h3>
    <div v-else>
      <button @click="submitSearch"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-search" viewBox="0 0 16 16">
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg> </button>
      <input type="text" v-model="searchTerm" placeholder="Search for photo" @keyup.enter="submitSearch" />
    </div>

  </div>
</template>