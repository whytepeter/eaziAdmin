import { ref, watch } from 'vue'

export const useDebouncedValue = (reactiveValue, delay) => {
  const __debouncedValue = ref(reactiveValue.value)

  watch([reactiveValue], (_$1, _$2, cleanup) => {
    let timeout = setTimeout(() => {
      __debouncedValue.value = reactiveValue.value
    }, delay)

    cleanup(() => clearTimeout(timeout))
  })

  return __debouncedValue
}
