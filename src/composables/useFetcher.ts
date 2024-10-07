import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { Photo } from '@/types/gallery.type'

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export function useFetcher(query: Ref<string>) {
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const data = ref<Photo[] | null>(null)

  const fetchGalleryData = async (q: string) => {
    const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&query=${q}&count=8&orientation=portrait`
    isLoading.value = true
    error.value = null
    data.value = null
    try {
      const response = await fetch(url)
      const json = await response.json()
      if (!response.ok) {
        error.value =
          json.errors[0] ||
          'An unknown error occurred with fetching the images for the gallery'
      }
      data.value = json
    } catch (err: any) {
      error.value =
        err.message || 'An unknown error occurred with fetching the images for the gallery'
    } finally {
      isLoading.value = false
    }
  }

  fetchGalleryData(query.value)

  watch(query, (q) => {
    q && fetchGalleryData(q)
  })

  return { isLoading, error, data }
}
