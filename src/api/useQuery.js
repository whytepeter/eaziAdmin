import { onMounted, ref, watch } from 'vue'
import { useDataStore } from '@/stores/data'

export const useQuery = (endpoint, payload) => {
  const isLoading = ref(false)
  const data = ref(null)
  const error = ref(null)

  const dataStore = useDataStore()

  const query = async () => {
    try {
      isLoading.value = true
      const response = await dataStore.query({
        endpoint: endpoint,
        payload: payload ? payload.value ?? payload : {}
      })
      // todo: refactor data extraction
      data.value = response.data ?? response
    } catch (err) {
      console.error('error calling endpoint --', endpoint, err.message)
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    query()
  })

  watch([payload], () => {
    query()
  })

  return {
    data,
    isLoading,
    error
  }
}
