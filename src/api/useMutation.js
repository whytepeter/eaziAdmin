import { onMounted, ref } from 'vue'
import { useDataStore } from '@/stores/data'

export const useMutation = (endpoint, immediate = false) => {
  const isLoading = ref(false)
  const data = ref(null)
  const error = ref(null)

  const dataStore = useDataStore()

  const mutate = async (payload, { onError, onSuccess }) => {
    console.log('mutating with payload --', payload)
    try {
      isLoading.value = true
      const response = await dataStore.mutate({
        endpoint: endpoint,
        data: payload
      })
      data.value = response.data
      return onSuccess(response.data)
    } catch (err) {
      console.log('inside use mutation --', err)
      error.value = err
      onError?.(err)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    if (immediate) {
      mutate()
    }
  })

  return {
    data,
    isLoading,
    error,
    mutate
  }
}
