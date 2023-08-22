<template>
  <main>
    <div
      style="height: 48px"
      :class="borderClass"
      class="relative border rounded-2xl p-3 flex items-center"
    >
      <div class="input-prefix inline-grid place-items-center" v-if="$slots.append">
        <slot name="append" />
      </div>
      <input
        ref="inputField"
        :class="$slots.append ? 'pl-2' : ' '"
        class="bg-white w-full font-medium text-sm leading-2 focus:outline-none block appearance-none"
        :value="formatAmount"
        :placeholder="placeholder"
        v-bind="$attrs"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="updateField($event)"
      />
      <div class="input-prefix inline-grid place-items-center" v-if="$slots.prepend">
        <slot name="prepend" />
      </div>

      <div
        v-if="label"
        style="transition: top, font-size, 0.1s ease-in-out"
        class="absolute z-10 pointer-events-none"
        :class="`${labelStyle}`"
      >
        <div class="w-full h-full relative">
          {{ label }}
          <span
            v-if="isFocused || modelValue"
            style="width: 110%; z-index: -2; margin-top: -4px"
            class="borderLine absolute top-1/2 -left-1 border-4 border-white"
          ></span>
        </div>
      </div>
    </div>
    <div v-if="error" class="text-xs font-medium text-error mb-3 ml-1 mt-1 text-left">
      {{ error }}
    </div>
    <div v-if="hint && !error" class="text-xs font-medium text-dark-600 mb-3 ml-1 mt-1 text-left">
      {{ hint }}
    </div>
  </main>
</template>
<script>
export default {
  inheritAttrs: false,

  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: undefined
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: undefined
    },
    format: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    isFocused: false
  }),

  computed: {
    formatAmount() {
      if (this.format) {
        let val = this.modelValue
        val = this.removeAlphabet(val)

        val = parseFloat(val)
        val = val.toLocaleString()

        if (val === 'NaN') {
          return ''
        } else {
          return `₦${val}`
        }
      } else {
        return this.modelValue
      }
    },

    borderClass() {
      let style = ''
      if (this.error) {
        style = 'border-error'
      } else {
        if (this.isFocused) {
          style = 'border-primary'
        } else {
          style = 'border-dark-300'
        }
      }

      return style
    },

    labelStyle() {
      let style = []

      if (this.isFocused) {
        style = 'left-3  -top-3.5 p-1 text-sm '
        style = this.error ? `${style} text-error` : `${style} text-primary`
        if (this.$slots.append) {
          style = `${style} left-6`
        }
      } else {
        if (String(this.modelValue).trim() === '') {
          style = 'top-1/2 transform -translate-y-1/2 text-dark-300'
        } else {
          style = ' -top-3.5  p-1 text-sm text-primary'
        }
        if (this.$slots.append) {
          style = `${style} left-8`
        }
      }

      return style
    }
  },

  methods: {
    updateField(e) {
      let amount = e.target.value

      if (this.format) {
        amount = this.removeAlphabet(amount)
        const firstChar = amount.charAt(0)
        if (firstChar === '₦') {
          amount = amount.substring(1)
        }

        if (amount !== null) {
          amount = amount.split(',').join('')
          amount = parseFloat(amount)
        }
      }

      this.$emit('update:modelValue', amount)
    },

    removeAlphabet(arg) {
      arg = arg.toString()
      let regex = /[a-zA-Z]/g
      this.$emit('update:modelValue', arg.replace(regex, ''))
      return arg.replace(regex, '')
    }
  }
}
</script>

<style></style>
