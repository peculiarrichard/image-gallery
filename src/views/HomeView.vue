<script setup lang="ts">
import Gallery from '@/components/Gallery.vue';
import Loading from '@/components/Loading.vue';
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import { useFetcher } from '@/composables/useFetcher';
import Error from '@/components/Error.vue';

const query = ref('African');
const { isLoading, error, data } = useFetcher(query);

const handleSearch = (searchTerm: string) => {
  query.value = searchTerm;
}
</script>

<template>
  <main class="main">
    <Header @onSearch="handleSearch" :isLoading="isLoading" :query="query"/>
    <Loading  v-if="isLoading" />
    <Error v-else-if="error" :error="error" />
    <Gallery v-else :data="data" />
  </main>
</template>
