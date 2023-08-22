<template>
  <div class="w-full grid grid-cols-1 gap-1">
    <div
      :class="`justify-${justify}`"
      id="otp"
      class="otp-input w-full flex text-center"
    >
      <div class="w-auto relative" v-for="i in inputs" :key="i.id">
        <input
          :class="`${
            size ? `h-${size} w-${size}` : 'h-10 sm:h-12 w-10 sm:w-12'
          } ${
            error
              ? 'border-error focus:border-error'
              : 'border-dark-300 focus:border-primary focus:ring-primary'
          }`"
          class="my-2 sm:mx-2 text-center text-primary text-lg border font-semibold rounded focus:outline-none"
          ref="otpInput"
          :id="String(i.id)"
          v-model="i.value"
          :type="type"
          @input="$emit('input', $event.target.value)"
          @keyup="otpInputKeyDown($event, i.id)"
          :maxlength="maxlength"
        />

        <div
          v-if="type === 'password' && i.value"
          :class="`${size ? `h-${size - 2} w-${size - 2}` : 'h-8  w-8'} ${
            error ? 'text-error' : 'text-dark-600'
          }`"
          class="absolute top-3 left-3 pointer-events-none text-2xl flex items-center bg-white justify-center"
        >
          <span class="mt-1 mr-1">*</span>
        </div>
      </div>
    </div>
    <div
      v-if="error"
      class="text-left font-medium block w-full text-xs text-error px-2"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  value: [String, Number],
  maxlength: {
    type: [String, Number],
    default: "1",
  },
  justify: {
    type: String,
    default: "around",
  },
  disabled: Boolean,
  placeholder: String,
  token_length: [String, Number],
  text: String,
  type: {
    type: String,
    default: "text",
  },
  size: [String, Number],
  error: {
    type: [String, Boolean],
    default: false,
  },
});

const emit = defineEmits(["input"]);

onMounted(() => {
  console.log(props.maxlength);
  //remove last two objects from inputs array if token_length is equal to 4
  if (props.token_length == 4) {
    inputs.value.pop();
    inputs.value.pop();
    // console.log(inputs.value);
  }
});

const array = ref([]);
const inputs = ref([
  {
    id: 1,
    type: "text",
    value: "",
    required: true,
  },
  {
    id: 2,
    type: "text",
    value: "",
    required: true,
  },
  {
    id: 3,
    type: "text",
    value: "",
    required: true,
  },
  {
    id: 4,
    type: "text",
    value: "",
    required: true,
  },
  {
    id: 5,
    type: "text",
    value: "",
    required: true,
  },
  {
    id: 6,
    type: "text",
    value: "",
    required: true,
  },
]);

const otp_input = ref("");

const otpInput = ref(null);

function log(arg) {
  console.log(JSON.parse(JSON.stringify(arg)));
}

function otpInputKeyDown(event, id) {
  array.value.push(props.value);
  // log(array.value);
  const inputs = otpInput.value;
  var n = id + 1;
  let arr = [];

  console.log(inputs);

  for (let i = 0; i < inputs.length; i++) {
    if (i !== props.token_length - 1 && event.key !== "Backspace") {
      if (inputs[i].value.length === 1) {
        // log(i);
        inputs[i + 1].focus();
        arr[i] = inputs[i].value;
        continue;
      }
    } else if (id !== 0 && event.key == "Backspace") {
      if (inputs[i].value.length === 0 && i !== id) {
        inputs[i - 1].focus();
        break;
      }
    }
  }
  for (let val of inputs) {
    arr.push(val.value);
  }
  //remove first 5 items from array
  if (props.token_length == 6) {
    arr.splice(0, 5);
  } else if (props.token_length == 4) {
    arr.splice(0, 3);
  }

  //remove empty strings from array
  arr = arr.filter((el) => el !== "");
  // log(arr);
  if (
    arr.length == props.token_length &&
    inputs[props.token_length - 1].value.length == 1
  ) {
    //join the items in the array to form a string
    otp_input.value = arr.join("");
    // log(otp_input.value);
    emit("input", otp_input.value);
  }
}
</script>

<style scope>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
input[type="password"] {
  -webkit-text-security: square;
  font-size: 30px;
}
</style>
